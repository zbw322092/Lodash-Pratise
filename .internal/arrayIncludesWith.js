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
	let index = -1;
	const length = array == null ? 0 : array.length;

	while (++index < length) {
		if (comparator(value, array[index])) {
			return true;
		}
	}
	return false;
}

export default arrayIncludesWith;

// var conparatorFunc = function(value1, value2) {
// 	if (value1 * 3 === value2)
// 		return true;
// };
// console.log(arrayIncludesWith([1,2,3,4], 2, conparatorFunc)); // false
// console.log(arrayIncludesWith([1,2,3,4,5,6], 2, conparatorFunc)); // true