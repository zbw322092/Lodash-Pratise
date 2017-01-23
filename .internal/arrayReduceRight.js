'use strict';
/**
 * A specialized version of `reduceRight` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
// 参数：一个数组，一个每次循环都会调用的函数，一个初始值，是否使用数组的最后一个元素作为初始值。
// 返回值：累积之后的值。

function arrayReduceRight(array, iteratee, accumulator, initAccum) {
	let length = array == null ? 0 : array.length;

	if (initAccum && length) {
		accumulator = array[--length];
	}

	// 这里不需要进行一个比较，因为0也会被当成falsely value。所以我们只需要一直这么减下去。我们想要取到index 0，所以把--
	// 放在后面，否则放在前面的话最小只能取到1。
	while (length--) {
		accumulator = iteratee(accumulator, array[length], length, array);
	}
	return accumulator;
}

// export default arrayReduceRight;
var a = [1,2,3];
var iterateeFunc = function(accumulator, value, key, array) {
	return accumulator += value * value;
};
console.log(arrayReduceRight(a, iterateeFunc, 0, false)); // 14
console.log(arrayReduceRight(a, iterateeFunc, 0, true)); // 8
console.log(arrayReduceRight({name: 'Bowen'}, iterateeFunc, 10, false)); // 10