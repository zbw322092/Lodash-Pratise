'use strict';

import baseRandom from './baseRandom.js';

/**
 * A specialized version of `shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
// 参数： 一个数组，一个数值，代表shuffle之后的数组长度
// 返回：shuffle之后的数组
// 参数缺失怎么办
// 参数类型不对怎么办
// 参数类型对但是值不符合逻辑怎么办
function shuffleSelf(array, size) {
	let index = -1;
	const length = array.length;
	const lastIndex = length - 1;
	size = size === undefined ? length : size;
	while (++index < size) {
		// 把index改成0也是一种变换方式
		// const rand = baseRandom(0, lastIndex);
		const rand = baseRandom(index, lastIndex);
		const value = array[rand];

		array[rand] = array[index];
		array[index] = value;
	}
	array.length = size;
	return array;
}

export default shuffleSelf;

// var a = [1,2,3,4,5,6,7,8];
// console.log(shuffleSelf(a));
// console.log(shuffleSelf(a,4));
// console.log(shuffleSelf(function(){},4)); // 报错了 Cannot assign to read only property 'length' of function () {}
// console.log(shuffleSelf({},4)); 
/**
 *{ '0': undefined,
  '1': undefined,
  '2': undefined,
  '3': undefined,
  NaN: undefined,
  length: 4 }
 * 
 */




