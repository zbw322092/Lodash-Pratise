'use strict';
/**
 * A specialized version of `map` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
// 参数：一个array，一个每次循环都会调用的函数
// 返回，每次循环调用函数处理过之后的array。因为不override原来的数组，所以我们新创建一个数组。

function arrayMap(array, iteratee) {
	let index = -1;
	const length = array == null ? 0 : array.length;
	const result = Array(length);

	while (++index < length) {
		result[index] = iteratee(array[index], index, array);
	}
	return result;
}

export default arrayMap;

// var a = [1,2,3,4,5];
// var iterateeFunc = function(value, key, array) {
// 	return value * value;
// };
// var f = function(v1,v2) {};
// f[0] = 8;
// f[1] = 10;

// var o = {0: 20, 1: 23, length: 2};
// var o2 = {1: 20, 2: 23, length: 2};

// var s = 'string';
// var s2 = '8899';

// console.log(arrayMap(a, iterateeFunc)); // [ 1, 4, 9, 16, 25 ]
// console.log(arrayMap(function(){}, iterateeFunc)); // []
// console.log(arrayMap(f, iterateeFunc)); // [ 64, 100 ]
// console.log(arrayMap(o, iterateeFunc)); // [ 400, 529 ]
// console.log(arrayMap(o2, iterateeFunc)); // [ NaN, 400 ]
// console.log(arrayMap(s, iterateeFunc)); // [ NaN, NaN, NaN, NaN, NaN, NaN ]
// console.log(arrayMap(s2, iterateeFunc)); // [ 64, 64, 81, 81 ]