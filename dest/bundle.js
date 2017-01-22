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

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */

	function addMapEntry(map, pair) {
	  map.set(pair[0], pair[1]);
	  return map;
	}

	// console.log(addMapEntry(new Map(), ['name', 'Bowen'])); // Map { 'name' => 'Bowen' }

	exports.default = addMapEntry;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
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

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
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

	var f = function f() {
		var index = -1,
		    sum = 0,
		    length = arguments.length;

		while (++index < length) {
			sum += arguments[index];
		}

		return this.a + this.b + sum;
	};

	var o = {
		a: 1,
		b: 2
	};

	// console.log(apply(f, o, [])); // 3
	// console.log(apply(f, o, [1])); // 4
	// console.log(apply(f, o, [1,2])); // 6
	// console.log(apply(f, o, [1,2,3])); // 9
	// console.log(apply(f, o, [1,2,3,4])); // 13

	exports.default = apply;

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

	var iterateeFunc = function iterateeFunc(value, key, array) {
		if (key == 2) return false;
		array[key] = value * value;
	};
	// console.log(arrayEach([1,2,3,4], iterateeFunc)); // [ 1, 4, 3, 4 ]

	exports.default = arrayEach;


	var a = [1, 2, 3, 4, 5];
	function loopOne() {
		for (var i = 0; i < a.length; i++) {
			console.log(a[i]);
		}
	}
	// loopOne(); // 1 2 3 4 5

	function loopTwo() {
		for (var i = 0; i < a.length; i++) {
			(function () {
				console.log(a[i]);
			})();
		}
	}
	// loopTwo(); // 1 2 3 4 5

	function loopThree() {
		for (var i = 0; i < a.length; i++) {
			setTimeout(function () {
				console.log(a[i]);
			}, 100);
		}
	}
	// loopThree(); // 五个undefined

	function loopFour() {
		for (var i = 0; i < a.length; i++) {
			setTimeout(function () {
				console.log(a[i]);
			});
		}
	}
	// loopFour(); // 五个undefined

	function loopFive() {
		var _loop = function _loop(i) {
			setTimeout(function () {
				console.log(a[i]);
			});
		};

		for (var i = 0; i < a.length; i++) {
			_loop(i);
		}
	}
	// loopFive(); // 1 2 3 4 5

	function loopSix() {
		var _loop2 = function _loop2(i) {
			setTimeout(function () {
				console.log(a[i]);
			}, 1000);
		};

		for (var i = 0; i < a.length; i++) {
			_loop2(i);
		}
	}
	// loopSix(); // 1 2 3 4 5

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

	var predicateFunc = function predicateFunc(value, key, array) {
		if (value > 10) return false;else return true;
	};
	var a = [9, 1, 3, 6],
	    b = [9, 1, 12, 6];

	// console.log(arrayEvery(a, predicateFunc)); // true
	// console.log(arrayEvery(b, predicateFunc)); // false

	exports.default = arrayEvery;

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

	var a = [1, 2, 3, 4, 5, 6];
	var predicateFunc = function predicateFunc(value, key, array) {
	  if (value % 2 === 0) {
	    return true;
	  }
	};
	// console.log(arrayFilter(a,predicateFunc)); // [ 2, 4, 6 ]


	exports.default = arrayFilter;

/***/ }
/******/ ]);