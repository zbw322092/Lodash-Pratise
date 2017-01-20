var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty,
		propertyIsEnumerable = objectProto.propertyIsEnumerable;

var nativeMax = Math.max;

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;


// Object#toString tags
var argsTag = '[object Arguments]',
		undefinedTag = '[object Undefined]',
		nullTag = '[object Null]',
		funcTag = '[object Function]',
		genTag = '[object GeneratorFunction]',
		asyncTag = '[object AsyncFunction]',
		proxyTag = '[object Proxy]'
		symbolTag = '[object Symbol]';


// RegExp
var reIsUint = /^(?:0|[1-9]\d*)$/;

var reTrim = /^\s+|\s+$/g,
    reTrimStart = /^\s+/,
    reTrimEnd = /\s+$/;

var reIsBinary = /^0b[01]+$/i,
		reIsOctal = /^0o[0-7]+$/i,
		reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

// Used to match property names within property paths.
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

// var moduleExports = 
// var freeModule = 
// Detect free variable `exports`.
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;



// constructors
// Creates a map cache object to store key-value pairs.
function MapCache (entries) {
	var index = -1,
		length = entries == null ? 0 : entries.length;

	this.clear();
	while (++index < length) {
		var entry = entries[index];
		this.set(entry[0], entry[1]);
	}
}

// Creates an array cache object to store unique values.
function SetCache (values) {
	var index = -1,
		length = values == null ? 0 : values.length;

	this.__data__ = new MapCache;
	while (++index < length) {
		this.add(values[index]);
	}
}

var commonFunctions = {
	// 这个值被typeof判断为object或者function，且这个值不是null的时候，下列函数返回true，否则为false
	// 要点：
	// typeof的可能值。
	// null的相等性。
	isObject: function (value) {
		var type = typeof value;
		return value !== null && (type === 'object' || type === 'function');
	},
	// 检测一个数值是否可以用做数组长度这个属性值。
	// 需要满足的条件：
	// 1. 是一个数字类型数值
	// 2. 整数
	// 3. 大于等于0
	// 4. 小于等于2^53-1
	// 
	// 这里要做类型检查的原因在于，我们如果传入一个空的字符串，下列的检查结果都会是true。
	isLength: function (value) {
		return typeof value === "number" && 
			value % 1 === 0 && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
	},
	// 通过调用Object原型中的toString方法来生成一个string，我们可以从这个string中获得类的信息。
	objectToString: function (value) {
		return nativeObjectToString.call(value);
	},
	// ++++
	// A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values
	getRawTag: function (value) {
		var isOwn = hasOwnProperty.call(value, symToStringTag),
			tag = value[symToStringTag];

		try {
			value[symToStringTag] = undefined;
			var unmasked = true;
		} catch(e) {}

		var result = nativeObjectToString.call(value);
		if (unmasked) {
			value[symToStringTag] = tag;
		} else {
			delete value[symToStringTag];
		}
		return result;
	},
	// The base implementation of `getTag` without fallbacks for buggy environments.
	baseGetTag: function (value) {
		// 给undefined和null类型定义两个单独的tags
		if (value == null) {
			return value === undefined ? undefinedTag : nullTag;
		}
		return (symToStringTag && symToStringTag in Object(value))
			? commonFunctions.getRawTag(value)
			: commonFunctions.objectToString(value);
	},
	// 这里主要用到了Object.prototype.toString.call()的判断方式。
	// 下面列举了四种在Object.prototype.toString.call()中的值可以被判断为funcion
	isFunction: function (value) {
		// 不确定这个判断是否多余。
		if (!commonFunctions.isObject(value)) {
			return false;
		}

		var tag = commonFunctions.baseGetTag(value);
		return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	},
	// Lodash对array-like的定义很简单，
	// 就是有length属性，
	// 且这个属性值是个合法的数组长度值，
	// 且这个值不是一个函数。
	// 
	// 这样子string也会被判为true。
	// 注意，这里先排除了这个value值不能是undefined或者null，因为试图取这两个值的length属性时会报错，
	// 而其他类型的值取length属性值的时候即使不存在也只是会返回undefined
	isArrayLike: function (value) {
		return value != null && commonFunctions.isLength(value.length)
			&& !commonFunctions.isFunction(value);
	},
	// 这里定义的isObjectLike很宽松，只要满足两个条件：
	// 不是null
	// typeof返回object
	isObjectLike: function (value) {
		return value !== null && typeof value === 'object';
	},
	// 这个方法就是在isArrayLike的基础上进一步规定tyeof值是object。总结起来
	// 1. typeof返回object
	// 2. 在此基础上排除掉null
	// 3. 有length属性
	// 4. length属性值是个合法的数组长度值
	isArrayLikeObject: function (value) {
		return commonFunctions.isArrayLike(value) && commonFunctions.isObjectLike(value);
	},
	// 下面这个函数检测index值是否是合法的array-like index.
	// 这里和isLength函数不同的地方在于，array-like index类型可以是string。
	isIndex: function (value, length) {
		// 检测是否有length这个实参是否被传入，如果没有传入，那么就默认是MAX_SAFE_INTEGER。
		// 注意，下面没有特地的对length的数据类型进行检测。而是通过value < length这个比较来限制结果。
		// 注意，这里的对length的类型检查并不严格，对value的检查比较严格。
		length = length == null ? Number.MAX_SAFE_INTEGER : length;
		return !!length
			&& (typeof value === 'number' || reIsUint.test(value))
			&& (value >= 0 && value % 1 === 0 && value < length);
	},
	// 这个函数做的事情就是比较两个值是否相等。
	// 这里用的严格比较。
	// 这个将两个NaN当成相对对待。
	eq: function (value, other) {
		return value === other || (value !== value && other !== other);
	},
	// Check if the given arguments are from an iteratee call
	isIterateeCall: function (value, index, object) {
		// 如果实参object不是object，直接返回false
		if(!commonFunctions.isObject(object)) {
			return false;
		}

		var type = typeof index;
		// 这里限制了index的数据类型只可以是number或者string。
		// 如果index是number，就看传入的object是不是arrayLike的，然后index是否能通过isIndex函数
		// 如果index是string，则直接检测index是否在object中。（in 操作符）
		if (type === 'number'
			? (commonFunctions.isArrayLike(object) && commonFunctions.isIndex(index, object.length)) :
			(type === 'string' && index in object)) {
			return commonFunctions.eq(object[index], value);
		}
		return false;
	},
	// ++++ (ES6)
	// Checks if `value` is classified as a `Symbol` primitive or object.
	isSymbol: function (value) {
		return typeof value === 'symbol' || 
			(commonFunctions.isObjectLike(value) && commonFunctions.baseGetTag(value) == symbolTag);
	},
	// Convert value to number
	toNumber: function (value) {
		// 如果已经是number, 直接返回。
		if (typeof value === 'number') {
			return value;
		}

		if (commonFunctions.isSymbol(value)) {
			return NaN;
		}

		if (commonFunctions.isObject(value)) {
			
		}
	},
	//这里和官方的写法不一样。加入了Array.isArray方法是否存在的检查。
	isArray: function (value) {
		return Array.isArray ? Array.isArray(value) : Object.prototype.toString(value) === '[object Array]';
	},
	// 
	parseInt: function (string, radix, guard) {
		// if (guard)
	},
	arrayMap: function (array, iteratee) {

	},
	// ++++(RegExp)
	// Checks if `value` is a property name and not a property path.
	// 即使单个元素的数组可以作为元素名（会被转化成string），这个还是排除了这种情况。
	isKey: function (value, object) {
		if (commonFunctions.isArray(value)) {
			return false;
		}

		var type = typeof value;
		if (type === 'number' || type === 'symbol' || type === 'boolean' || 
			value == null || commonFunctions.isSymbol(value)) {
			return true;
		}
		return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
			(object != null && value in Object(object));
	},
	// Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	// 这里排除了对象的情况，认为两个对象在严格模式下不相等。
	isStrictComparable: function (value) {
		return value === value && !commonFunctions.isObject(value);
	},
	matchesStrictComparable: function (key, srcValue) {
		return function(object) {
			if (object == null) {
				return false;
			}
			// 如果只是下面这样判断的话，当对象的key属性不存在，然后srcValue没传或者传入undefined的时候，也会
			// 返回true。并且，如果形参object最终传入的是一个原始值，object[key]大多数时候也会是undefined。
			// 然后我们想排除上面这些情况
			// return object[key] === srcValue
			return object[key] === srcValue &&
				(srcValue !== undefined || (key in Object(object)));
		}
	},
	// A specialized version of `_.some` for arrays without support for iteratee
	arraySome: function (array, predicate) {
		var index = -1,
			length = array == null ? 0 : array.length;

		while (++index < length) {
			if (predicate(array[index], index, array)) {
				return true;
			}
		}
		return false;
	},
	equalArrays: function (array, other, bitmask, customizer, equalFunc, stack) {
		var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
			arrLength = array.length,
			othLength = other.length;

		// 这里通过array的长度来首先排除一些不相等的数组。
		// 会被判为不相等需要满足下面的条件：
		// 不是部分比较，并且arrLength != othLength，或者是部分比较，并且othLength > arrLength
		// 按照上面的逻辑写出来的判断大概像下面这样：
		// (!isPartial && arrLength !== othLength) || (isPartial && othLength > arrLength)
		// 然而官方的代码不是这么写的，官方写法逻辑是排除的逻辑：
		// 所有两个长度不一样的数组都不相等，除了isPartial && (othLength <= arrLength)的时候。
		if (arrLength !== othLength && !(isPartial && othLength > arrLength)) {
			return false;
		}

		// Assume cyclic values are equal.
		var stacked = stack.get(array);
		if (stacked && stack.get(other)) {
			return stacked == other;
		}

		var index = -1,
			result = true,
			seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

		stack.set(array, other);
		stack.set(other, array);

		while (++index < arrLength) {
			var arrValue = array[index]
					othValue = other[index];

			if (customizer) {
				var compared = isPartial
					? customizer(othValue, arrValue, index, other, array, stack)
					: customizer(arrValue, othValue, index, array, other, stack);
			}
			if (compared !== undefined) {
				if (compared) {
					continue;
				}
				result = false;
				break;
			}
			// Recursively compare arrays (susceptible to call stack limits).
			if (seen) {
				if (!arraySome(other, function(othValue, othIndex) {
					if (!cacheHas(seen, othIndex) &&
						(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
						return seen.push(othIndex);
					}
				})) {
					result = false;
					break;
				}
			} else if (!(
					arrValue === othValue ||
						equalFunc(arrValue, othValue, bitmask, customizer, stack)
				)) {
				result = false;
				break;
			}
		}

		stack['delete'](array);
		stack['delete'](other);
		return result;
	},

	// Checks if a `cache` value for `key` exists.
	cacheHas: function (cache, key) {
		// 这里没有对cache和key做任何的类型检测，这个工作交给js引擎自己去处理了。比如传入一个没有has方法的
		// object，会自动的报错。
		return cache.has(key);
	},

	// Appends the elements of `values` to `array`.
	// 这个函数要做的基本上就是Array的concat()方法做的事情。
	arrayPush: function (array, values) {
		var index = -1,
			valueLength = values.length,
			offset = array.length;

		while (++index < valueLength) {
			// 这个方法在array是数组的情况下使用没问题，但是不是array的话会报错。官方的代码中用的是一个更笨但是更保险的方法。
			// array.push(values[index]);
			array[offset + index] = values[index];
		}
		return array;
	},

	//The base implementation of `getAllKeys` and `getAllKeysIn` which uses
  // `keysFunc` and `symbolsFunc` to get the enumerable property names and symbols of `object`.
  baseGetAllKeys: function (object, keysFunc, symbolsFunc) {
  	var result = keysFunc(object);
  	return commonFunctions.isArray(object) ? result : arrayPush(result, symbolsFunc(object));
  },
  // Creates an array of the enumerable property names of the array-like `value`.
  arrayLikeKeys: function(){

  },
  // The base implementation of `_.isArguments`.
  baseIsArguments: function (value) {
  	return commonFunctions.isObjectLike(value) && commonFunctions.baseGetTag(value) === argsTag;
  },
  // Checks if `value` is likely an `arguments` object.
  // 第二种情况中，"手动的判断是否是arguments"要做的判断是：value是object, 这个object自身有callee属性，这个callee属性是不可枚举的
  isArguments: function () {
  	return commonFunctions.baseIsArguments(function() { return arguments; }()) ? 
  		commonFunctions.baseIsArguments : 
  		function(value) {
      return commonFunctions.isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
      	!propertyIsEnumerable.call(value, 'callee');
      }
  }





};

module.exports = commonFunctions;

/* ***************************TESTING***************************************** */
// console.log(module.exports.isObject(function() {})); // true
// console.log(module.exports.isObject({})); // true
// console.log(module.exports.isObject(undefined)); // false
// console.log(module.exports.isObject(null)); // false
// console.log(module.exports.isObject(1234)); // false
// console.log(module.exports.isObject('it is a string')); // false
// console.log(module.exports.isObject(false)); // false
// console.log(module.exports.isObject()); // false  在必传入的实参没有传的时候，这个实参被当做undefined处理


// console.log(module.exports.isLength('')); // false
// console.log(module.exports.isLength(0)); // true
// console.log(module.exports.isLength('0')); // false
// console.log(module.exports.isLength(NaN)); // false
// console.log(module.exports.isLength()); // false
// console.log(module.exports.isLength(undefined)); // false
// console.log(module.exports.isLength(Number.MAX_SAFE_INTEGER)); // true
// console.log(module.exports.isLength(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(module.exports.isLength(Infinity)); // false
// console.log(module.exports.isLength(-0)); // true
// console.log(module.exports.isLength(1.23)); // false

// console.log(module.exports.objectToString({name: 'bowen'})); // [object Object]
// console.log(module.exports.objectToString(123)); // [object Number]
// console.log(module.exports.objectToString('it is a string')); // [object String]
// console.log(module.exports.objectToString(function(){})); // [object Function]
// console.log(module.exports.objectToString(null)); // [object Null]
// console.log(module.exports.objectToString(undefined)); // [object Undefined]
// console.log(module.exports.objectToString(NaN)); // [object Number]
// console.log(module.exports.objectToString([1,2,3])); // [object Array]
// console.log(module.exports.objectToString(new Date())); // [object Date]
// console.log(module.exports.objectToString(new Map())); // [object Map]

// console.log(module.exports.baseGetTag({name: 'bowen'})); // [object Object]
// console.log(module.exports.baseGetTag(null)); // [object Null]

// console.log(commonFunctions.isFunction(function() {})); // true
// console.log(commonFunctions.isFunction({})); // false
// console.log(commonFunctions.isFunction(null)); // false
// console.log(commonFunctions.isFunction(undefined)); // false
// console.log(commonFunctions.isFunction(new Date())); // false

// var o1 = {};
// o1.length = 0;
// var o2 = {};
// o2.length = -1;
// console.log(commonFunctions.isArrayLike(new Date())); // false
// console.log(commonFunctions.isArrayLike('it is a string')); // true
// console.log(commonFunctions.isArrayLike(o1)); // true
// console.log(commonFunctions.isArrayLike(o2)); // false
// console.log(commonFunctions.isArrayLike([])); // true
// console.log(commonFunctions.isArrayLike(null)); // false
// console.log(commonFunctions.isArrayLike(undefined)); // false

// console.log(commonFunctions.isObjectLike(new Date())); // true
// console.log(commonFunctions.isObjectLike({})); // true
// console.log(commonFunctions.isObjectLike([1,2,3])); // true
// console.log(commonFunctions.isObjectLike(function(){})); // false
// console.log(commonFunctions.isObjectLike(undefined)); // false
// console.log(commonFunctions.isObjectLike(null)); // false

// console.log(commonFunctions.isArrayLikeObject(null)); // false
// console.log(commonFunctions.isArrayLikeObject(undefined)); // false
// console.log(commonFunctions.isArrayLikeObject('it is a string')); // false
// console.log(commonFunctions.isArrayLikeObject(new Date())); // false
// console.log(commonFunctions.isArrayLikeObject(function() {})); // false
// console.log(commonFunctions.isArrayLikeObject({})); // false
// console.log(commonFunctions.isArrayLikeObject({length: -1})); // false
// console.log(commonFunctions.isArrayLikeObject({length: 1.23})); // false
// console.log(commonFunctions.isArrayLikeObject({length: 0})); // true
// console.log(commonFunctions.isArrayLikeObject([])); // true


// console.log(reIsUint.test(123));
// console.log(reIsUint.test('123'));

// console.log(commonFunctions.isIndex('123', 12)); // false
// console.log(commonFunctions.isIndex('123', 123)); // false
// console.log(commonFunctions.isIndex(0, 0)); // false
// console.log(commonFunctions.isIndex(0, -1)); // false
// console.log(commonFunctions.isIndex('123', 124)); // true
// console.log(commonFunctions.isIndex('123', 124.5)); // true
// console.log(commonFunctions.isIndex('123', function(){})); // true

// var o3 = {name: 'bowen'};
// var o4 = {name: 'bowen'};
// console.log(commonFunctions.eq(o3, o4)); // false
// console.log(commonFunctions.eq([1,2,3], [1,2,3])); // false
// console.log(commonFunctions.eq(123, '123')); // false
// console.log(commonFunctions.eq(null, null)); // true
// console.log(commonFunctions.eq(undefined, undefined)); // true
// console.log(commonFunctions.eq(NaN, NaN)); // true

// console.log(commonFunctions.isIterateeCall(23, 'age', {name: 'Bowen', age: 23})); // true
// console.log(commonFunctions.isIterateeCall(23, 'name', {name: 'Bowen', age: 23})); // false
// console.log(commonFunctions.isIterateeCall(23, 1, {0: 'Bowen', 1: 23})); // false
// console.log(commonFunctions.isIterateeCall(23, 1, {0: 'Bowen', 1: 23, length:2})); // true

// console.log(commonFunctions.isKey('name')); // true
// console.log(commonFunctions.isKey(true)); // true
// console.log(commonFunctions.isKey(123)); // true
// console.log(commonFunctions.isKey(null)); // true
// console.log(commonFunctions.isKey('name   age')); // true
// console.log(commonFunctions.isKey('name.age', {"name.age": 123})); // true
// console.log(commonFunctions.isKey('name.age')); // false

// console.log(commonFunctions.isStrictComparable('it is a string')); // true
// console.log(commonFunctions.isStrictComparable(false)); // true
// console.log(commonFunctions.isStrictComparable(undefined)); // true
// console.log(commonFunctions.isStrictComparable(null)); // true
// console.log(commonFunctions.isStrictComparable({})); // false
// console.log(commonFunctions.isStrictComparable({name: 'Bowen'})); // false
// console.log(commonFunctions.isStrictComparable([])); // false
// console.log(commonFunctions.isStrictComparable([1,2,3])); // false
// console.log(commonFunctions.isStrictComparable(new Date())); // false
// console.log(commonFunctions.isStrictComparable(NaN)); // false

// console.log(commonFunctions.matchesStrictComparable('name', 'bowen')({name: 'bowen', age: 12})); // true
// console.log(commonFunctions.matchesStrictComparable('name', 'bowen')({name: 'bowen2', age: 12})); // false
// console.log(commonFunctions.matchesStrictComparable('name')({name: 'bowen2', age: 12})); // false
// console.log(commonFunctions.matchesStrictComparable('name')({name: undefined, age: 12})); // true

// console.log(commonFunctions.arraySome([1,2,3], function(value, key, array) {return value === 1})); // true
// console.log(commonFunctions.arraySome([1,2,3], function(value, key, array) {return value === 12})); // false
// console.log(commonFunctions.arraySome([1,2,3], function() {return false})); // false
// console.log(commonFunctions.arraySome([1,2,3], function() {return true})); // true
// console.log(commonFunctions.arraySome({name: 'Bowen', age: 12}, function(value, key, array) {return value === 'Bowen'})); // false
// console.log(commonFunctions.arraySome({1: 'Bowen', 2: 12}, function(value, key, array) {return value === 'Bowen'})); // false
// console.log(commonFunctions.arraySome({1: 'Bowen', 2: 12, length: 2}, function(value, key, array) {return value === 'Bowen'})); // true
// console.log(commonFunctions.arraySome(undefined, function(value, key, array) {return value === 'Bowen'})); // false

// var a = new Map();
// var i = [
// 	['name', 'Bowen'],
// 	['age', 24]
// ];
// MapCache.call(a, i);
// console.log(a);

// console.log(commonFunctions.equalArrays([1,2,3], [1,2,3], undefined,undefined,undefined,new Map())); // true

// console.log(commonFunctions.arrayPush([1,2,3], [4,5,6])); // [ 1, 2, 3, 4, 5, 6 ]
// console.log(commonFunctions.arrayPush([], [])); // []
// console.log(commonFunctions.arrayPush(function(){}, [1,2,3])); // { [Function] '0': 1, '1': 2, '2': 3 }
// console.log(commonFunctions.arrayPush({name: 'Bowen'}, [1,2,3,4])); // { name: 'Bowen', NaN: 4 } 
// // 上面的例子之所以是这个结果，是因为object的length是undefined，那么在和数字相加的时候返回了NaN
// // console.log(commonFunctions.arrayPush(undefined, [1,2,3,4])); // 报错
// // console.log(commonFunctions.arrayPush(null, [1,2,3,4])); // 报错
// console.log(commonFunctions.arrayPush('string', [1,2,3,4])); // string 没有变化。因为wrapper object的用完即时销毁的属性

// console.log(commonFunctions.baseIsArguments(function() { return arguments; }())); // true

// console.log(commonFunctions.isArguments());

console.log(freeExports); // {}





















