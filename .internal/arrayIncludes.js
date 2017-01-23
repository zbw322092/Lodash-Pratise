import baseIndexOf from './baseIndexOf.js';

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
	const length = array == null ? 0 : array.length;
	return !!length && baseIndexOf(array, value, 0) > -1;
}

export default arrayIncludes;


console.log(arrayIncludes([1,2,3,4,5], 3)); // true
console.log(arrayIncludes([1,2,3,4,NaN,5], NaN)); // true
console.log(arrayIncludes([],undefined)); // false
console.log(arrayIncludes([],null)); // false
console.log(arrayIncludes([undefined],undefined)); // true