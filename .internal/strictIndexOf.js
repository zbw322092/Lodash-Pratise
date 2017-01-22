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
function strictIndexOf(array, value, fromIndex) {
	const length = array.length;
	let index = fromIndex -1;

	while (++index < length) {
		if (array[index] === value) {
			return index;
		}
	}
	return -1;
}

export default strictIndexOf;

// var a = [1,2,3,4,5,6];
// console.log(strictIndexOf(a, 4, 0)); // 3
// console.log(strictIndexOf(a, 4)); // -1
// console.log(strictIndexOf(a, 9, 0)); // -1
