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


	var conparatorFunc = function conparatorFunc(value1, value2) {
		if (value1 * 3 === value2) return true;
	};
	console.log(arrayIncludesWith([1, 2, 3, 4], 2, conparatorFunc));
	console.log(arrayIncludesWith([1, 2, 3, 4, 5, 6], 2, conparatorFunc));

/***/ }
/******/ ]);