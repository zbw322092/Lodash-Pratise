var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;

var nativeMax = Math.max;

var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

// Object#toString tags
var undefinedTag = '[object Undefined]',
		nullTag = '[object Null]',
		funcTag = '[object Function]',
		genTag = '[object GeneratorFunction]',
		asyncTag = '[object AsyncFunction]',
		proxyTag = '[object Proxy]'
		symbolTag = '[object Symbol]';

var reIsUint = /^(?:0|[1-9]\d*)$/
		reIsBinary = /^0b[01]+$/i;

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
	isLength: function(value) {
		return typeof value === "number" && 
			value % 1 === 0 && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
	},
	// 通过调用Object原型中的toString方法来生成一个string，我们可以从这个string中获得类的信息。
	objectToString: function(value) {
		return nativeObjectToString.call(value);
	},
	// ++++
	// A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values
	getRawTag: function(value) {
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
	baseGetTag: function(value) {
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
	isFunction: function(value) {
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
	isArrayLike: function(value) {
		return value != null && commonFunctions.isLength(value.length)
			&& !commonFunctions.isFunction(value);
	},
	// 这里定义的isObjectLike很宽松，只要满足两个条件：
	// 不是null
	// typeof返回object
	isObjectLike: function(value) {
		return value !== null && typeof value === 'object';
	},
	// 这个方法就是在isArrayLike的基础上进一步规定tyeof值是object。总结起来
	// 1. typeof返回object
	// 2. 在此基础上排除掉null
	// 3. 有length属性
	// 4. length属性值是个合法的数组长度值
	isArrayLikeObject: function(value) {
		return commonFunctions.isArrayLike(value) && commonFunctions.isObjectLike(value);
	},
	// 下面这个函数检测index值是否是合法的array-like index.
	// 这里和isLength函数不同的地方在于，array-like index类型可以是string。
	isIndex: function(value, length) {
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
	eq: function(value, other) {
		return value === other || (value !== value && other !== other);
	},
	// Check if the given arguments are from an iteratee call
	isIterateeCall: function(value, index, object) {
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
	isSymbol: function(value) {
		return typeof value === 'symbol' || 
			(commonFunctions.isObjectLike(value) && commonFunctions.baseGetTag(value) == symbolTag);
	},
	// Convert value to number
	toNumber: function(value) {
		// 如果已经是number, 直接返回。
		if (typeof value === 'number') {
			return value;
		}

		if (commonFunctions.isSymbol(value)) {
			return NaN;
		}

		if (commonFunctions.isObject(value)) {
			
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

console.log(commonFunctions.isIterateeCall(23, 'age', {name: 'Bowen', age: 23})); // true
console.log(commonFunctions.isIterateeCall(23, 'name', {name: 'Bowen', age: 23})); // false
console.log(commonFunctions.isIterateeCall(23, 1, {0: 'Bowen', 1: 23})); // false
console.log(commonFunctions.isIterateeCall(23, 1, {0: 'Bowen', 1: 23, length:2})); // true


























