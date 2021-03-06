/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	__webpack_require__(10);
	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);
	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);
	__webpack_require__(28);
	__webpack_require__(29);
	__webpack_require__(30);
	__webpack_require__(32);
	__webpack_require__(33);
	__webpack_require__(34);
	__webpack_require__(35);
	__webpack_require__(36);
	__webpack_require__(37);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function addMapEntry(map, pair) {
	  map.set(pair[0], pair[1]);
	  return map;
	}

	// console.log(addMapEntry(new Map(), ['name', 'Bowen'])); // Map { 'name' => 'Bowen' }

	exports.default = addMapEntry;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}

	// console.log(addSetEntry(new Set(), null)); // Set { null }
	// console.log(addSetEntry(new Set(), [1,2,3])); // Set { [ 1, 2, 3 ] }

	exports.default = addSetEntry;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	// ++++ (为什么像下面这样写原因不明确)

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	exports.default = apply;

	// var f = function () {
	// 	var index = -1,
	// 		sum = 0,
	// 		length = arguments.length;

	// 	while (++index < length) {
	// 		sum += arguments[index];
	// 	}

	// 	return this.a + this.b + sum;
	// }

	// var o = {
	// 	a: 1,
	// 	b: 2
	// }

	// console.log(apply(f, o, [])); // 3
	// console.log(apply(f, o, [1])); // 4
	// console.log(apply(f, o, [1,2])); // 6
	// console.log(apply(f, o, [1,2,3])); // 9
	// console.log(apply(f, o, [1,2,3,4])); // 13

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * A specialized version of `forEach` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	// 这里使用到了ES6中的let和const语句
	function arrayEach(array, iteratee) {
		var index = -1;
		var length = array == null ? 0 : array.length;

		while (++index < length) {
			if (iteratee(array[index], index, array) === false) {
				break;
			}
		}
		return array;
	}

	exports.default = arrayEach;

	// var iterateeFunc = function(value, key, array) {
	// 	if (key == 2) return false;
	// 	array[key] = value * value;
	// }
	// console.log(arrayEach([1,2,3,4], iterateeFunc)); // [ 1, 4, 3, 4 ]


	// var a = [1,2,3,4,5];
	// function loopOne() {
	// 	for (var i = 0; i < a.length; i++) {
	// 		console.log(a[i]);
	// 	}
	// }
	// // loopOne(); // 1 2 3 4 5

	// function loopTwo() {
	// 	for (var i = 0; i < a.length; i++) {
	// 		(function() {
	// 			console.log(a[i]);
	// 		})();
	// 	}
	// }
	// // loopTwo(); // 1 2 3 4 5

	// function loopThree() {
	// 	for (var i = 0; i < a.length; i++) {
	// 		setTimeout(
	// 		function() {
	// 			console.log(a[i]);
	// 		},100);
	// 	}
	// }
	// // loopThree(); // 五个undefined

	// function loopFour() {
	// 	for (var i = 0; i < a.length; i++) {
	// 		setTimeout(
	// 		function() {
	// 			console.log(a[i]);
	// 		});
	// 	}
	// }
	// // loopFour(); // 五个undefined

	// function loopFive() {
	// 	for (let i = 0; i < a.length; i++) {
	// 		setTimeout(
	// 		function() {
	// 			console.log(a[i]);
	// 		});
	// 	}
	// }
	// // loopFive(); // 1 2 3 4 5

	// function loopSix() {
	// 	for (let i = 0; i < a.length; i++) {
	// 		setTimeout(
	// 		function() {
	// 			console.log(a[i]);
	// 		}, 1000);
	// 	}
	// }
	// // loopSix(); // 1 2 3 4 5

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * A specialized version of `forEachRight` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */

	function arrayEachRight(array, iteratee) {
	  var length = array == null ? 0 : array.length;
	  while (length--) {
	    if (iteratee(array[length], length, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	exports.default = arrayEachRight;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * A specialized version of `every` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if all elements pass the predicate check,
	 *  else `false`.
	 */
	function arrayEvery(array, predicate) {
	  var index = -1;
	  var length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (!predicate(array[index], index, array)) {
	      return false;
	    }
	  }
	  return true;
	}

	exports.default = arrayEvery;

	// var predicateFunc = function(value, key, array) {
	// 	if (value > 10)
	// 		return false;
	// 	else
	// 		return true;
	// };
	// var a = [9,1,3,6],
	// 	b = [9,1,12,6];

	// console.log(arrayEvery(a, predicateFunc)); // true
	// console.log(arrayEvery(b, predicateFunc)); // false

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * A specialized version of `filter` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	// 步骤
	// 	循环每个元素
	// 		看这个元素是否能通过检验
	// 			如果通过，则加入到结果中
	// 			如果不通过，则忽略
	function arrayFilter(array, predicate) {
	  var index = -1;
	  var resIndex = 0;
	  var length = array == null ? 0 : array.length;
	  var result = [];

	  // while (++index < length) {
	  // 	if (predicate(array[index], index, array)) {
	  // 		result.push(array[index]);
	  // 	}
	  // }

	  // 官方代码中的写法
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[resIndex++] = value;
	    }
	  }

	  return result;
	}

	exports.default = arrayFilter;

	// var a = [1,2,3,4,5,6];
	// var predicateFunc = function(value, key, array) {
	// 	if (value % 2 === 0) {
	// 		return true;
	// 	}
	// };
	// console.log(arrayFilter(a,predicateFunc)); // [ 2, 4, 6 ]

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseIndexOf = __webpack_require__(9);

	var _baseIndexOf2 = _interopRequireDefault(_baseIndexOf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A specialized version of `includes` for arrays without support for
	 * specifying an index to search from.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */
	function arrayIncludes(array, value) {
	  var length = array == null ? 0 : array.length;
	  return !!length && (0, _baseIndexOf2.default)(array, value, 0) > -1;
	}

	exports.default = arrayIncludes;

	// console.log(arrayIncludes([1,2,3,4,5], 3)); // true
	// console.log(arrayIncludes([1,2,3,4,NaN,5], NaN)); // true
	// console.log(arrayIncludes([],undefined)); // false
	// console.log(arrayIncludes([],null)); // false
	// console.log(arrayIncludes([undefined],undefined)); // true

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseFindIndex = __webpack_require__(10);

	var _baseFindIndex2 = _interopRequireDefault(_baseFindIndex);

	var _baseIsNaN = __webpack_require__(11);

	var _baseIsNaN2 = _interopRequireDefault(_baseIsNaN);

	var _strictIndexOf = __webpack_require__(12);

	var _strictIndexOf2 = _interopRequireDefault(_strictIndexOf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The base implementation of `indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	function baseIndexOf(array, value, fromIndex) {
	  return value === value ? (0, _strictIndexOf2.default)(array, value, fromIndex) : (0, _baseFindIndex2.default)(array, _baseIsNaN2.default, fromIndex);
	}

	exports.default = baseIndexOf;

	// var a = [1,2,3,4,5,6,NaN,8];
	// console.log(baseIndexOf(a, 3, 0)); // 2
	// console.log(baseIndexOf(a, 3, 6)); // -1
	// console.log(baseIndexOf(a, 10, 0)); // -1
	// console.log(baseIndexOf(a, NaN, 0)); // 6

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * The base implementation of `findIndex` and `findLastIndex`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Function} predicate The function invoked per iteration.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	// 这个function要做的事情是按照一定的条件在一个array中筛选出符合条件的index。我们可以指定index起始位置，
	// 也可以指定是否从右边开始筛选。一旦找到了符合条件的index就停止查找，查找结束还没找到的话返回未找到。
	// 步骤：
	// 	根据设置来确定从哪个元素开始循环
	// 	然后确定是从左边开始循环还是从右边开始
	// 	根据之前的判断来循环每个元素
	//		根据一定的条件来测试元素是否符合
	//			只要找到一个符合的，则返回这个值
	//			如果没有，则返回未找到

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function baseFindIndex(array, predicate, fromIndex, fromRight) {
		var length = array.length;
		var index = fromIndex + (fromRight ? 1 : -1);

		while (fromRight ? index-- : ++index < length) {
			if (predicate(array[index], index, array)) {
				return index;
			}
		}
		return -1;

		// 下面是我的写法。没有官方代码来的简洁。
		// if (fromRight) {
		// 	while (--index > -1) {
		// 		if (predicate(array[index], index, array)) {
		// 			return true
		// 		}
		// 	}
		// 	return -1;
		// } else {
		// 	while (++index < length) {
		// 		if (predicate(array[index], index, array)) {
		// 			return true
		// 		}
		// 	}
		// 	return -1;
		// }
	}

	exports.default = baseFindIndex;

	// var a = [1,2,3,4,5,6,7,8,9];
	// var predicateFunc = function(value, key, array) {
	// 	if (value % 6 === 0)
	// 		return true;
	// }

	// var predicateFuncTwo = function(value, key, array) {
	// 	if (value % 2 === 1)
	// 		return true;
	// }

	// console.log(baseFindIndex(a, predicateFunc, 6)); // -1
	// console.log(baseFindIndex(a, predicateFunc, 6, true));  // 5

	// console.log(baseFindIndex(a, predicateFuncTwo, 0)); // 0
	// console.log(baseFindIndex(a, predicateFuncTwo, 1, true)); // 0

	// console.log(baseFindIndex(a, predicateFuncTwo)); // -1

	// var i = 0;
	// while (i-- >= 0) {
	// 	console.log('It works, here'); // 被执行了一次
	// }
	// while (--i >= 0) {
	// 	console.log('It works'); // 未被执行
	// }


	// var i = 5;
	// while (i-- > 0) {
	// 	console.log(i); // 4 3 2 1 0
	// }
	// console.log(i); // -1

	// while (--i > 0) {
	// 	console.log(i); // 4 3 2 1
	// }
	// console.log(i); // 1

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * The base implementation of `isNaN` without support for number objects.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	 */
	// 判断是否是NaN。方法很简单，就是判断自己是否等于自己，不等的话就是NaN
	function baseIsNaN(value) {
	  return value !== value;
	}

	exports.default = baseIsNaN;

	// console.log(baseIsNaN(123));
	// console.log(baseIsNaN());
	// console.log(baseIsNaN(''));
	// console.log(baseIsNaN(NaN)); // true

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A specialized version of `indexOf` which performs strict equality
	 * comparisons of values, i.e. `===`.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function strictIndexOf(array, value, fromIndex) {
	  var length = array.length;
	  var index = fromIndex - 1;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	exports.default = strictIndexOf;

	// var a = [1,2,3,4,5,6];
	// console.log(strictIndexOf(a, 4, 0)); // 3
	// console.log(strictIndexOf(a, 4)); // -1
	// console.log(strictIndexOf(a, 9, 0)); // -1

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * This function is like `arrayIncludes` except that it accepts a comparator.
	 *
	 * @private
	 * @param {Array} [array] The array to inspect.
	 * @param {*} target The value to search for.
	 * @param {Function} comparator The comparator invoked per element.
	 * @returns {boolean} Returns `true` if `target` is found, else `false`.
	 */

	function arrayIncludesWith(array, value, comparator) {
	  var index = -1;
	  var length = array == null ? 0 : array.length;

	  while (++index < length) {
	    if (comparator(value, array[index])) {
	      return true;
	    }
	  }
	  return false;
	}

	exports.default = arrayIncludesWith;

	// var conparatorFunc = function(value1, value2) {
	// 	if (value1 * 3 === value2)
	// 		return true;
	// };
	// console.log(arrayIncludesWith([1,2,3,4], 2, conparatorFunc)); // false
	// console.log(arrayIncludesWith([1,2,3,4,5,6], 2, conparatorFunc)); // true

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * The base implementation of `times` without support for max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	// 要做的事情就是设置一个array，然后一个每次循环都会调用的函数（以index为参数），然后将函数每次的结果放到数组对应的元素位置上。

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function baseTimes(n, iteratee) {
	  var index = -1;
	  var result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	exports.default = baseTimes;

	// var iterateeFunc = function(value) {
	// 	return value * value;
	// };

	// console.log(baseTimes(8, iterateeFunc));
	// console.log(baseTimes(0, iterateeFunc)); // []
	// console.log(baseTimes({}, iterateeFunc)); // [ {} ]
	// console.log(baseTimes({name: 'Bowen', age: 23}, iterateeFunc)); // [ { name: 'Bowen', age: 23 } ]
	// console.log(baseTimes(undefined, iterateeFunc)); // [ undefined ]
	// console.log(baseTimes(null, iterateeFunc)); // [ null ]

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function arrayPush(array, values) {
	  var index = -1;
	  var length = values.length;
	  var offsets = array.length;

	  while (++index < length) {
	    array[offsets + index] = values[index];
	  }
	  return array;
	}

	exports.default = arrayPush;

	// var f = function() {};
	// console.log(arrayPush([1,2,3,4], [5,6,7]));
	// console.log(arrayPush(f, [5,6,7])); // { [Function] '0': 5, '1': 6, '2': 7 }
	// console.log(f); // { [Function] '0': 5, '1': 6, '2': 7 }
	// // console.log(arrayPush(undefined, [5,6,7])); // 报错
	// console.log(arrayPush('It is a string', [5,6,7])); // It is a string

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A specialized version of `map` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	// 参数：一个array，一个每次循环都会调用的函数
	// 返回，每次循环调用函数处理过之后的array。因为不override原来的数组，所以我们新创建一个数组。

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function arrayMap(array, iteratee) {
	  var index = -1;
	  var length = array == null ? 0 : array.length;
	  var result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	exports.default = arrayMap;

	// var a = [1,2,3,4,5];
	// var iterateeFunc = function(value, key, array) {
	// 	return value * value;
	// };
	// var f = function(v1,v2) {};
	// f[0] = 8;
	// f[1] = 10;

	// var o = {0: 20, 1: 23, length: 2};
	// var o2 = {1: 20, 2: 23, length: 2};

	// var s = 'string';
	// var s2 = '8899';

	// console.log(arrayMap(a, iterateeFunc)); // [ 1, 4, 9, 16, 25 ]
	// console.log(arrayMap(function(){}, iterateeFunc)); // []
	// console.log(arrayMap(f, iterateeFunc)); // [ 64, 100 ]
	// console.log(arrayMap(o, iterateeFunc)); // [ 400, 529 ]
	// console.log(arrayMap(o2, iterateeFunc)); // [ NaN, 400 ]
	// console.log(arrayMap(s, iterateeFunc)); // [ NaN, NaN, NaN, NaN, NaN, NaN ]
	// console.log(arrayMap(s2, iterateeFunc)); // [ 64, 64, 81, 81 ]

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A specialized version of `reduce` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	// 参数：一个array，一个每次循环都会调用的函数，初始值，是否将第一个元素设置为初始值
	// 返回：一个累积之后的值

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  // let index = initAccum ? 0 : -1;
	  // accumulator = initAccum ? array[0] : accumulator;
	  // const length = array == null ? 0 : array.length;

	  // while (++index < length) {
	  // 	accumulator += iteratee(array[index], index, array);
	  // }
	  // return accumulator;

	  var index = -1;
	  var length = array == null ? 0 : array.length;

	  // 长度不为0且initAccum为true的时候，取元素第一个值。
	  if (initAccum && length) {
	    // 这里一个巧妙的设计就是我们没有根据initAccum的值取单独的设置index的值，而是这里因为要取数组第一个元素，自然的给index加了1。
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    // 其实这里没有做叠加的事情，这个事情留给iteratee去做了。
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	exports.default = arrayReduce;

	// var a = [1,2,3];
	// var iterateeFunc = function(accumulator, value, key, array) {
	// 	return accumulator += value * value;
	// };
	// console.log(arrayReduce(a, iterateeFunc, 0, false)); // 14
	// console.log(arrayReduce(a, iterateeFunc, 10, false)); // 24
	// console.log(arrayReduce(a, iterateeFunc, 10, true)); // 14 这里即使提供了初始值，但是因为initAccum是true，还是取了数组第一个元素做初始值。
	// console.log(arrayReduce([], iterateeFunc, 0, false)); // 0
	// console.log(arrayReduce([], iterateeFunc, undefined, false)); // undefined
	// console.log(arrayReduce([], iterateeFunc, undefined, true)); // undefined
	// console.log(arrayReduce([], iterateeFunc)); // undefined
	// console.log(arrayReduce([], iterateeFunc, 20, true)); // 20
	// console.log(arrayReduce([], iterateeFunc, 20, false)); // 20

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A specialized version of `reduceRight` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the last element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	// 参数：一个数组，一个每次循环都会调用的函数，一个初始值，是否使用数组的最后一个元素作为初始值。
	// 返回值：累积之后的值。

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	  var length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[--length];
	  }

	  // 这里不需要进行一个比较，因为0也会被当成falsely value。所以我们只需要一直这么减下去。我们想要取到index 0，所以把--
	  // 放在后面，否则放在前面的话最小只能取到1。
	  while (length--) {
	    accumulator = iteratee(accumulator, array[length], length, array);
	  }
	  return accumulator;
	}

	exports.default = arrayReduceRight;

	// var a = [1,2,3];
	// var iterateeFunc = function(accumulator, value, key, array) {
	// 	return accumulator += value * value;
	// };
	// console.log(arrayReduceRight(a, iterateeFunc, 0, false)); // 14
	// console.log(arrayReduceRight(a, iterateeFunc, 0, true)); // 8
	// console.log(arrayReduceRight({name: 'Bowen'}, iterateeFunc, 10, false)); // 10

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * The base implementation of `random` without support for returning
	 * floating-point numbers.
	 *
	 * @private
	 * @param {number} lower The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the random number.
	 */
	// 参数： 一个上限值，一个下限值。
	// 返回值：在这个上限值和下限值之间的一个随机数
	// 这个函数上下界限都可能取到，也就是[lower, upper]

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function baseRandom(lower, upper) {
	  return lower + Math.floor(Math.random() * (upper - lower + 1));
	}

	exports.default = baseRandom;

	// console.log(baseRandom(0,100));
	// console.log(baseRandom(-100,-300));
	// console.log(baseRandom(NaN, NaN)); // NaN

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseRandom = __webpack_require__(19);

	var _baseRandom2 = _interopRequireDefault(_baseRandom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A specialized version of `sample` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to sample.
	 * @returns {*} Returns the random element.
	 */
	// 这个函数做的事情就是随机的返回数组中的一个元素值。
	// 参数：一个array
	// 返回值：数组中的一个随机的元素
	function arraySample(array) {
	  var length = array.length;
	  return length === 0 ? undefined : array[(0, _baseRandom2.default)(0, length - 1)];
	}

	exports.default = arraySample;

	// console.log(arraySample([1,2,3,4,5]));

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * The base implementation of `clamp` which doesn't coerce arguments.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */
	// 参数：一个需要被夹在中间的值，一个上限值，一个下限值
	// 返回值：三个数中处于中间的值

	function baseClamp(number, lower, upper) {
		if (number === number) {
			if (upper !== undefined) {
				number = number <= upper ? number : upper;
			}
			if (lower !== undefined) {
				number = number >= lower ? number : lower;
			}
		}
		return number;
	}

	exports.default = baseClamp;

	// 正确的使用
	// console.log(baseClamp(3,1,5)); // 3
	// console.log(baseClamp(0,1,5)); // 1
	// console.log(baseClamp(10,1,5)); // 5
	// console.log(baseClamp(3,3,3)); // 3


	// // 错误的使用
	// console.log(baseClamp(0,5,1)); // 5
	// console.log(baseClamp(3,5,1)); // 5


	// console.log(baseClamp(10,null,null)); // null
	// console.log(baseClamp(10,-10,null)); // null   null会被转换成0. Number(null)结果是0
	// console.log(baseClamp({},10,20)); // 20  {}和数字比较都会返回false

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	// 需要做的事情：将一个数组拷贝到另外一个数组中。另外一个数组存在的话，覆盖对应的元素，未被覆盖到的不动。
	// 如果另一个数组不存在的话就新建一个数组再进行拷贝。
	// 参数：需要被拷贝的array，目标数组
	// 返回：目标数组

	// 注意下面的写法，我们不能直接拿source这个array给目标array赋值，因为这样就让两个array指向了同一个引用，某个数组的变化都会
	// 反应到另外一个array中。

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function copyArray(source, array) {
		var index = -1;
		var length = source.length;

		// array = array || Array(length);
		// 下面是官方代码中的写法
		// 表达的意思和起到的作用和上面自己写的那行代码是一样的。但是官方的代码透出对表达式更深入的理解。
		array || (array = Array(length));
		while (++index < length) {
			array[index] = source[index];
		}
		return array;
	}

	exports.default = copyArray;

	// console.log(copyArray([1,2,3],[0,0,0,0,0,0,0])); // [ 1, 2, 3, 0, 0, 0, 0 ]
	// console.log(copyArray([1,,,,,6],[0,0,0,0,0,0,0])); // [ 1, undefined, undefined, undefined, undefined, 6, 0 ]
	// console.log(copyArray([1,,,,,6],[0,0])); // [ 1, undefined, undefined, undefined, undefined, 6 ]
	// console.log(copyArray(function(){},[0,0])); // [0, 0]
	// console.log(copyArray([0,0], function(){})); // { [Function] '0': 0, '1': 0 }

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseRandom = __webpack_require__(19);

	var _baseRandom2 = _interopRequireDefault(_baseRandom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A specialized version of `shuffle` which mutates and sets the size of `array`.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @param {number} [size=array.length] The size of `array`.
	 * @returns {Array} Returns `array`.
	 */
	// 参数： 一个数组，一个数值，代表shuffle之后的数组长度
	// 返回：shuffle之后的数组
	// 参数缺失怎么办
	// 参数类型不对怎么办
	// 参数类型对但是值不符合逻辑怎么办
	function shuffleSelf(array, size) {
	  var index = -1;
	  var length = array.length;
	  var lastIndex = length - 1;
	  size = size === undefined ? length : size;
	  while (++index < size) {
	    // 把index改成0也是一种变换方式
	    // const rand = baseRandom(0, lastIndex);
	    var rand = (0, _baseRandom2.default)(index, lastIndex);
	    var value = array[rand];

	    array[rand] = array[index];
	    array[index] = value;
	  }
	  array.length = size;
	  return array;
	}

	exports.default = shuffleSelf;

	// var a = [1,2,3,4,5,6,7,8];
	// console.log(shuffleSelf(a));
	// console.log(shuffleSelf(a,4));
	// console.log(shuffleSelf(function(){},4)); // 报错了 Cannot assign to read only property 'length' of function () {}
	// console.log(shuffleSelf({},4)); 
	/**
	 *{ '0': undefined,
	  '1': undefined,
	  '2': undefined,
	  '3': undefined,
	  NaN: undefined,
	  length: 4 }
	 * 
	 */

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _baseClamp = __webpack_require__(21);

	var _baseClamp2 = _interopRequireDefault(_baseClamp);

	var _copyArray = __webpack_require__(22);

	var _copyArray2 = _interopRequireDefault(_copyArray);

	var _shuffleSelf = __webpack_require__(23);

	var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A specialized version of `sampleSize` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to sample.
	 * @param {number} n The number of elements to sample.
	 * @returns {Array} Returns the random elements.
	 */
	// 参数：一个array，取n个elememts
	// 返回值：取的这个n个元素的随机顺序的数组
	// 在这里我们不想要改变原来数组的元素，所以这里我们就可以使用copyArray了。
	function arraySampleSize(array, n) {
		// const length = array.length;
		// n = n === baseClamp(n, 0, length) ? n : length;
		// return shuffleSelf(array, n);

		// 上面的代码是自己写的，有几个问题
		// 1. n = n === baseClamp(n, 0, length) ? n : length;这句显得很冗余。因为baseClamp函数
		// 已经帮我们做了很多事情：
		// 	如果n介于0和length之间，取n
		// 	如果n小于0，取0
		// 	如果n大于length，取length
		// 以上baseClamp做的事情完全符合我们的需求。
		// 2. 我们更改了原来array中的元素。但是我们不想更改，所以要引入copyArray。
		// 写函数的时候我们需要考虑的事情之一就是我们是否想更改实参。
		// 3. const length = array.length; 这里命名的length在下面只用到了一次，我们可以不用单独的
		// 声明这个值，而可以在需要的时候直接使用它。当然，单独的命名一个新的length变量更加的清晰。
		// 下面是改进版：
		return (0, _shuffleSelf2.default)((0, _copyArray2.default)(array), (0, _baseClamp2.default)(n, 0, array.length));
	}

	exports.default = arraySampleSize;

	// var a = [1,2,3,4,5,6,7,8];
	// console.log(arraySampleSize(a, 4));

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * A specialized version of `some` for arrays.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	// 参数： 一个array，一个每个循环都会调用的函数（这个函数的参数是array的value和key pair）
	// 返回值：是否有能让调用函数返回true的值

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function arraySome(array, predicate) {
	  var index = -1;
	  var length = array == null ? 0 : array.length;;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    };
	  }
	  return false;
	}

	exports.default = arraySome;

	// var f = function(value, key, array) {
	// 	if (value % 6 === 2)
	// 		return true;
	// };
	// console.log(arraySome([1,2,3,4,5,6], f)); // true
	// console.log(arraySome([3,4,5,6], f)); // false

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Gets the size of an ASCII `string`.
	 *
	 * @private
	 * @param {string} string The string inspect.
	 * @returns {number} Returns the string size.
	 */
	function asciiSize(_ref) {
	  var length = _ref.length;

	  return length;
	}

	exports.default = asciiSize;

	// 注意，这里单独运行这个文件的时候需要加上兼容ES6的命令：node --harmony_destructuring asciiSize.js
	// console.log(asciiSize('string')); // 6
	// console.log(asciiSize({name: 'Bowen'})); // undefined
	// console.log(asciiSize(function(v1,v2) {})); // 2
	// console.log(asciiSize(undefined)); // 报错

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	// 参数：一个string
	// 返回值：一个从string转换而来的array
	// 注意，string的split方法做的事就是将string分割到一个array中。不会改变原来的string。
	function asciiToArray(string) {
	  return string.split('');
	}

	exports.default = asciiToArray;

	// console.log(asciiToArray("")); // []
	// console.log(asciiToArray("string")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
	// console.log(asciiToArray({name: 'Bowen'})); // 报错

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	// 这个函数做的事情就是将传入的参数用上面的正则表达式进行检验，如果检验通过，则返回由符合正则的字符串组成的数组，如果检验不通过，则返回空数组。
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	exports.default = asciiWords;

	// console.log(asciiWords('it is a string')); // [ 'it', 'is', 'a', 'string' ]
	// console.log(asciiWords('str****ing')); // [ 'str', 'ing' ]
	// console.log(asciiWords('****')); // []  实际是null，但是函数里面处理掉了

	// 如果我们把上面的g flag取掉，我们看下结果
	// console.log(asciiWords('it is a string')); // [ 'it', index: 0, input: 'it is a string' ]
	// console.log(asciiWords('str****ing')); // [ 'str', index: 0, input: 'str****ing' ]
	// console.log(asciiWords('****')); // []  实际是null，但是函数里面处理掉了

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * The base implementation of `assignValue` and `assignMergeValue` without
	 * value checks.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	// 参数：一个目标对象，一个key值，一个value值
	// 返回值：被定义了属性之后的object
	function baseAssignValue(object, key, value) {
		if (key === '__proto__') {
			Object.defineProperty(object, key, {
				configurable: true,
				enumerable: true,
				value: value,
				writable: true
			});
		} else {
			object[key] = value;
		}
	}

	exports.default = baseAssignValue;

	// var a = {};
	// baseAssignValue(a, 'name', 'Bowen');
	// baseAssignValue(a, 'age', 23);
	// baseAssignValue(a, '__proto__', 'Can I Do It?');
	// baseAssignValue(a, undefined, undefined);
	// baseAssignValue(a, null, null);
	// baseAssignValue(a, NaN, NaN);
	// console.log(a);

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseAssignValue = __webpack_require__(29);

	var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

	var _eq = __webpack_require__(31);

	var _eq2 = _interopRequireDefault(_eq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	// 变量：一个目标对象，一个key值，一个value值
	// 返回：没有返回值，只是进行赋值操作。
	// 这里我们只想给own property赋值
	// 这个函数做的事情：给一个对象的属性赋值，除非这个对象已经有这个属性且值相等。还有一种情况也可以赋值，就是
	// 赋的值是undefined，且这个object中不存在这个key。
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && (0, _eq2.default)(objValue, value)) || value === undefined && !(key in object)) {
	    (0, _baseAssignValue2.default)(object, key, value);
	  }
	}

	exports.default = assignValue;

	// var a = {name:'Bowen', age: 24};
	// assignValue(a, 'name', 'Bowen2');
	// assignValue(a, 'height', undefined);
	// console.log(a); // { name: 'Bowen2', age: 24, height: undefined }

/***/ },
/* 31 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * const object = { 'a': 1 };
	 * const other = { 'a': 1 };
	 *
	 * eq(object, object);
	 * // => true
	 *
	 * eq(object, other);
	 * // => false
	 *
	 * eq('a', 'a');
	 * // => true
	 *
	 * eq('a', Object('a'));
	 * // => false
	 *
	 * eq(NaN, NaN);
	 * // => true
	 */
	// 参数：两个需要相互比较的值
	// 返回值：是否两个比较的值相等
	// 这个函数主要处理一些两个值是NaN的特殊情况。
	function eq(value, other) {
	  // 这是第一步的写法，然后简化到最终的写法。
	  // if (value !== value && other !== other) {
	  // 	return true;
	  // } else {
	  // 	return value === other;
	  // }
	  return value === other || value !== value && other !== other;
	}

	exports.default = eq;

	// var a = 123,
	// 	b = '123',
	// 	c = 123;
	// var o1 = {name: 'Bowen'};
	// var o2 = {name: 'Bowen'};
	// console.log(eq(a,b)); // false
	// console.log(eq(a,c)); // true
	// console.log(eq(o1,o2)); // false
	// console.log(eq(o1,o1)); // true
	// console.log(eq(NaN, NaN)); // true

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _baseAssignValue = __webpack_require__(29);

	var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

	var _eq = __webpack_require__(31);

	var _eq2 = _interopRequireDefault(_eq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	// 参数：目标对象，一个key值，一个value值
	// 返回值：没有返回值，只是进行赋值
	// 给一个对象自己的属性进行赋值，只要这个值和已经存在的值不相等，且这个值不是undefined。
	// 或者现在这个对象没有这个属性，且要赋值的属性值是undefined。
	function assignMergeValue(object, key, value) {
	  // 注意，这里我们不需要在使用Object.prototype.hasOwnProperty来检测是否存在这个属性，因为我们限制不能是
	  // undefined，所以相等成立的时候这个属性在对象中必然是存在的。
	  if (value !== undefined && !(0, _eq2.default)(object[key], value) || value === undefined && !(key in object)) {
	    (0, _baseAssignValue2.default)(object, key, value);
	  }
	}

	exports.default = assignMergeValue;

	// var a = {name: 'Bowen', age: 23};
	// assignMergeValue(a, 'name', undefined);
	// assignMergeValue(a, 'age', 24);
	// assignMergeValue(a, 'height', 183);
	// assignMergeValue(a, 'weight', 80);
	// console.log(a); // { name: 'Bowen', age: 24, height: 183, weight: 80 }

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _eq = __webpack_require__(31);

	var _eq2 = _interopRequireDefault(_eq);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	// 参数：一个array，一个key值
	// 返回值：这个key值在array的什么位置
	function assocIndexOf(array, key) {
		// let index = -1;
		// const length = array.length;

		// while (++index < length) {
		// 	if (eq(array[index][0], key))
		// 		return index;
		// }
		// return -1;


		// 上面是自己实现的这个函数。下面是官方的代码， 更加的简洁。
		var length = array.length;
		while (length--) {
			if ((0, _eq2.default)(array[length][0], key)) {
				return length;
			}
		}
		return -1;
	}

	exports.default = assocIndexOf;

	// var a = [[0, 'Bowen'],[1, 'Hui'], [2, 'John'], [3,'Jason']];
	// console.log(assocIndexOf(a, 5)); // -1
	// console.log(assocIndexOf(a, 3)); // 3
	// console.log(assocIndexOf(a, '3')); // -1
	// console.log(assocIndexOf(a, 'Bowen')); // -1

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _assignValue = __webpack_require__(30);

	var _assignValue2 = _interopRequireDefault(_assignValue);

	var _baseAssignValue = __webpack_require__(29);

	var _baseAssignValue2 = _interopRequireDefault(_baseAssignValue);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	// 参数：一个copy from的对象，一个copy to的对象，哪些properties需要被copy，一个定制copy value的function.
	function copyObject(source, props, object, customizer) {
		// let length = props.length;
		// while (length--) {
		// 	object[props[length]] = customizer(source[props[length]]);
		// }
		// return object;

		// 上面的是自己实现的，和官方的代码差别主要在于官方代码对传入的参数做了一些处理。
		var isNew = !object;
		object || (object = {});

		var index = -1;
		var length = props.length;

		while (++index < length) {
			var key = props[index];

			// 这里也对于customizer是否存在做了处理。
			var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

			// 这样写了过滤了customizer返回值也是undefined的情况
			if (newValue === undefined) {
				newValue = source[key];
			}

			// 这里区分了copy to的对象是否是{}的情况
			if (isNew) {
				(0, _baseAssignValue2.default)(object, key, newValue);
			} else {
				(0, _assignValue2.default)(object, key, newValue);
			}
		}
		return object;
	}

	exports.default = copyObject;

	// var source = {
	// 	name: 'Bowen',
	// 	height: 183,
	// 	weight: 80,
	// 	age: 24,
	// 	tel: undefined
	// };

	// var targetObject = {},
	// 	targetObject2 = {'name': 'Hui'},
	// 	targetObject3;

	// var props = ['name', 'age', 'company'];
	// var customizer = function (objectProperty, sourceProperty, key, object, source) {
	// 	return 'Bowen personal: ' + sourceProperty
	// };
	// var customizer2 = function (objectProperty, sourceProperty, key, object, source) {
	// 	return undefined;
	// };

	// console.log(copyObject(source, props, targetObject, customizer));
	// console.log(copyObject(source, props, targetObject2, customizer));
	// console.log(copyObject(source, props, targetObject3, customizer));

	// console.log(copyObject(source, props, targetObject, customizer2));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _copyArray = __webpack_require__(22);

	var _copyArray2 = _interopRequireDefault(_copyArray);

	var _shuffleSelf = __webpack_require__(23);

	var _shuffleSelf2 = _interopRequireDefault(_shuffleSelf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A specialized version of `shuffle` for arrays.
	 *
	 * @private
	 * @param {Array} array The array to shuffle.
	 * @returns {Array} Returns the new shuffled array.
	 */
	// 参数：一个数组
	// 返回的参数：一个新的被打乱（shuffled）之后的数组
	function arrayShuffle(array) {
	  return (0, _shuffleSelf2.default)((0, _copyArray2.default)(array));
	}

	exports.default = arrayShuffle;

	// var a = [1,2,3,4];
	// var f = function(v1,v2) {};
	// var s = 'string';
	// console.log(arrayShuffle(a)); // [ 4, 2, 1, 3 ]
	// console.log(arrayShuffle(f)); // [ undefined, undefined ]
	// console.log(arrayShuffle(s)); // [ 't', 'n', 'i', 's', 'r', 'g' ]

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';
	/**
	 * The base implementation of `conformsTo` which accepts `props` to check.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property predicates to conform to.
	 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
	 */
	// 参数：一个源数组，一个目标数组，一个包含properties的array

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	function baseConformsTo(object, source, props) {
		var length = props.length;
		if (object == null) {
			return !length;
		}

		while (length--) {
			var key = props[length];
			var predicate = source[key];
			var value = object[key];

			// 这里value === undefined && !(key in object)的意思也就是如果value是undefined，且是因为
			// key在这个object中不存在引起的，那么就返回false
			if (value === undefined && !(key in object) || !predicate(value)) {
				return false;
			}

			// 注意下面的写法和上面的写法的区别。下面写法的问题在于，如果predicate不存在，predicate(value)这里就会首先报错。
			// if (!predicate(value) || (value === undefined && !(key in object))) {
			// 	return false;
			// }
		}
		return true;
	}

	exports.default = baseConformsTo;

	// var object = {name: 'Bowen', age: 23, height: 183};
	// var object2 = {name: 'Bowen', age: 23, height: 183, company: undefined};
	// var source = {
	// 	name: function(value) {
	// 		return value.length < 20
	// 	},
	// 	age: function(value) {
	// 		return (typeof value === 'number') && (18 <= value <= 30);
	// 	},
	// 	height: function(value) {
	// 		return value !== undefined;
	// 	},
	// 	company: function(value) {
	// 		return value == undefined;
	// 	}
	// };
	// var props = ['name', 'age'];
	// var props2 = ['name', 'age', 'height'];
	// var props3 = ['name', 'age', 'height', 'company'];
	// var props4 = [];

	// console.log(baseConformsTo(object, source, props)); // true
	// console.log(baseConformsTo(object, source, props2)); // true
	// console.log(baseConformsTo(object, source, props3)); // false
	// console.log(baseConformsTo(object2, source, props3)); // true
	// console.log(baseConformsTo(object, source, props4)); // true

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _isObject = __webpack_require__(38);

	var _isObject2 = _interopRequireDefault(_isObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The base implementation of `create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} proto The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	// 参数：一个需要被继承的prototype
	// 返回值：一个新的object
	// 这个函数做的一个简单的处理就是判断下proto是不是对象，如果不是就直接返回一个空对象。
	function baseCreate(proto) {
	  return (0, _isObject2.default)(proto) ? Object.create(proto) : {};
	}

	exports.default = baseCreate;


	var a = {
	  name: 'Bowen',
	  age: 24,
	  company: undefined
	};
	var b = [1, 2, 3, 4, 5, 6];
	var c = function c() {};
	var d = 'string';
	var o = {};
	o.prototype = a;
	console.log(baseCreate(a));
	console.log(baseCreate(b));
	console.log(baseCreate(c));
	console.log(baseCreate(d));
	console.log(baseCreate(o));

/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * isObject({});
	 * // => true
	 *
	 * isObject([1, 2, 3]);
	 * // => true
	 *
	 * isObject(Function);
	 * // => true
	 *
	 * isObject(null);
	 * // => false
	 */
	// 参数：一个待检查的值
	// 返回值：这个待检查的值是否是object类型的值
	function isObject(value) {
	  // return (typeof value === 'object' || typeof value === 'function') && (value !== null);
	  // 根据上面的写法的改进版本（也许会带来执行效率上的提升，待考证）：
	  // 下面的改进点在于：
	  // 	将value != null前置了，如果是null或者undefined就直接排除，不用执行后面的操作。
	  // 	命名了type方法
	  // 暂时不明确的一点：为什么在比较的时候使用了非严格判断的==
	  // 注意，不能这么写: const type = typeof;
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	exports.default = isObject;

/***/ }
/******/ ]);