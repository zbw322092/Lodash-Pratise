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
	let index = -1;
	const length = array == null ? 0 : array.length;

	while(++index < length) {
		if(!predicate(array[index], index, array)) {
			return false;
		}
	}
	return true;
}

var predicateFunc = function(value, key, array) {
	if (value > 10)
		return false;
	else
		return true;
};
var a = [9,1,3,6],
	b = [9,1,12,6];

console.log(arrayEvery(a, predicateFunc)); // true
console.log(arrayEvery(b, predicateFunc)); // false

export default arrayEvery;
