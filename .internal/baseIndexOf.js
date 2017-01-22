import baseFindIndex from './baseFindIndex.js';
import baseIsNaN from './baseIsNaN.js';
import strictIndexOf from './strictIndexOf.js';

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
	return value === value
		? strictIndexOf(array, value, fromIndex)
		: baseFindIndex(array, baseIsNaN, fromIndex);
}

export default baseIndexOf;

// var a = [1,2,3,4,5,6,NaN,8];
// console.log(baseIndexOf(a, 3, 0)); // 2
// console.log(baseIndexOf(a, 3, 6)); // -1
// console.log(baseIndexOf(a, 10, 0)); // -1
// console.log(baseIndexOf(a, NaN, 0)); // 6