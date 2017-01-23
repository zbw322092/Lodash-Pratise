'use strict';
/**
 * The base implementation of `random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
// 参数： 一个上限值，一个下限值。
// 返回值：在这个上限值和下限值之间的一个随机数
// 这个函数上下界限都可能取到，也就是[lower, upper]
function baseRandom(lower, upper) {
	return lower + Math.floor(Math.random() * (upper - lower + 1));
}

export default baseRandom;




// console.log(baseRandom(0,100));
// console.log(baseRandom(-100,-300));