import copyArray from './copyArray.js';
import shuffleSelf from './shuffleSelf.js';

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
	return shuffleSelf(copyArray(array));
}

export default arrayShuffle;

// var a = [1,2,3,4];
// var f = function(v1,v2) {};
// var s = 'string';
// console.log(arrayShuffle(a)); // [ 4, 2, 1, 3 ]
// console.log(arrayShuffle(f)); // [ undefined, undefined ]
// console.log(arrayShuffle(s)); // [ 't', 'n', 'i', 's', 'r', 'g' ]