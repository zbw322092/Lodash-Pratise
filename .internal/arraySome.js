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
function arraySome(array, predicate) {
	let index = -1;
	const length = array == null ? 0 : array.length;;

	while (++index < length) {
		if (predicate(array[index], index, array)) {
			return true
		};
	}
	return false;
}

export default arraySome;

// var f = function(value, key, array) {
// 	if (value % 6 === 2)
// 		return true;
// };
// console.log(arraySome([1,2,3,4,5,6], f)); // true
// console.log(arraySome([3,4,5,6], f)); // false