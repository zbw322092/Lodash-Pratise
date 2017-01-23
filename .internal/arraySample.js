'use strict';
import baseRandom from './baseRandom.js';

/**
 * A specialized version of `sample` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @returns {*} Returns the random element.
 */
// 这个函数做的事情就是随机的返回数组中的一个元素值。
// 参数：一个array
// 返回值：数组中的一个随机的元素
function arraySample(array) {
	const length = array.length;
	return length === 0 ? undefined : array[baseRandom(0, length-1)];
}

export default arraySample;

// console.log(arraySample([1,2,3,4,5]));