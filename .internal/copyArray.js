'use strict';
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
// 需要做的事情：将一个数组拷贝到另外一个数组中。另外一个数组存在的话，覆盖对应的元素，未被覆盖到的不动。
// 如果另一个数组不存在的话就新建一个数组再进行拷贝。
// 参数：需要被拷贝的array，目标数组
// 返回：目标数组

// 注意下面的写法，我们不能直接拿source这个array给目标array赋值，因为这样就让两个array指向了同一个引用，某个数组的变化都会
// 反应到另外一个array中。
function copyArray(source, array) {
	let index = -1;
	const length = source.length;

	// array = array || Array(length);
	// 下面是官方代码中的写法
	// 表达的意思和起到的作用和上面自己写的那行代码是一样的。但是官方的代码透出对表达式更深入的理解。
	array || (array = Array(length));
	while (++index < length) {
		array[index] = source[index];
	}
	return array;
}

export default copyArray;

// console.log(copyArray([1,2,3],[0,0,0,0,0,0,0])); // [ 1, 2, 3, 0, 0, 0, 0 ]
// console.log(copyArray([1,,,,,6],[0,0,0,0,0,0,0])); // [ 1, undefined, undefined, undefined, undefined, 6, 0 ]
// console.log(copyArray([1,,,,,6],[0,0])); // [ 1, undefined, undefined, undefined, undefined, 6 ]
// console.log(copyArray(function(){},[0,0])); // [0, 0]
// console.log(copyArray([0,0], function(){})); // { [Function] '0': 0, '1': 0 }