'use strict';
/**
 * The base implementation of `times` without support for max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
// 要做的事情就是设置一个array，然后一个每次循环都会调用的函数（以index为参数），然后将函数每次的结果放到数组对应的元素位置上。

function baseTimes(n, iteratee) {
	let index = -1;
	const result = Array(n);

	while (++index < n) {
		result[index] = iteratee(index);
	}
	return result;
}

export default baseTimes;

// var iterateeFunc = function(value) {
// 	return value * value;
// };

// console.log(baseTimes(8, iterateeFunc));
// console.log(baseTimes(0, iterateeFunc)); // []
// console.log(baseTimes({}, iterateeFunc)); // [ {} ]
// console.log(baseTimes({name: 'Bowen', age: 23}, iterateeFunc)); // [ { name: 'Bowen', age: 23 } ]
// console.log(baseTimes(undefined, iterateeFunc)); // [ undefined ]
// console.log(baseTimes(null, iterateeFunc)); // [ null ]
