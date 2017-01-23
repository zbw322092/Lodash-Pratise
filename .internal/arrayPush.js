'use strict';
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush(array, values) {
	let index = -1;
	const length = values.length
	const offsets = array.length;

	while (++index < length) {
		array[offsets + index] = values[index];
	}
	return array;
}

export default arrayPush;

// var f = function() {};
// console.log(arrayPush([1,2,3,4], [5,6,7]));
// console.log(arrayPush(f, [5,6,7])); // { [Function] '0': 5, '1': 6, '2': 7 }
// console.log(f); // { [Function] '0': 5, '1': 6, '2': 7 }
// // console.log(arrayPush(undefined, [5,6,7])); // 报错
// console.log(arrayPush('It is a string', [5,6,7])); // It is a string