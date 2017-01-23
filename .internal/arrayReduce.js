'use strict';
/**
 * A specialized version of `reduce` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
// 参数：一个array，一个每次循环都会调用的函数，初始值，是否将第一个元素设置为初始值
// 返回：一个累积之后的值

function arrayReduce(array, iteratee, accumulator, initAccum) {
	// let index = initAccum ? 0 : -1;
	// accumulator = initAccum ? array[0] : accumulator;
	// const length = array == null ? 0 : array.length;

	// while (++index < length) {
	// 	accumulator += iteratee(array[index], index, array);
	// }
	// return accumulator;

  let index = -1;
  const length = array == null ? 0 : array.length;

  // 长度不为0且initAccum为true的时候，取元素第一个值。
  if (initAccum && length) {
  	// 这里一个巧妙的设计就是我们没有根据initAccum的值取单独的设置index的值，而是这里因为要取数组第一个元素，自然的给index加了1。
    accumulator = array[++index];
  }
  while (++index < length) {
  	// 其实这里没有做叠加的事情，这个事情留给iteratee去做了。
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

export default arrayReduce;


// var a = [1,2,3];
// var iterateeFunc = function(accumulator, value, key, array) {
// 	return accumulator += value * value;
// };
// console.log(arrayReduce(a, iterateeFunc, 0, false)); // 14
// console.log(arrayReduce(a, iterateeFunc, 10, false)); // 24
// console.log(arrayReduce(a, iterateeFunc, 10, true)); // 14 这里即使提供了初始值，但是因为initAccum是true，还是取了数组第一个元素做初始值。
// console.log(arrayReduce([], iterateeFunc, 0, false)); // 0
// console.log(arrayReduce([], iterateeFunc, undefined, false)); // undefined
// console.log(arrayReduce([], iterateeFunc, undefined, true)); // undefined
// console.log(arrayReduce([], iterateeFunc)); // undefined
// console.log(arrayReduce([], iterateeFunc, 20, true)); // 20
// console.log(arrayReduce([], iterateeFunc, 20, false)); // 20
