import eq from '../eq.js';

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
// 参数：一个array，一个key值
// 返回值：这个key值在array的什么位置
function assocIndexOf(array, key) {
	// let index = -1;
	// const length = array.length;

	// while (++index < length) {
	// 	if (eq(array[index][0], key))
	// 		return index;
	// }
	// return -1;
	

	// 上面是自己实现的这个函数。下面是官方的代码， 更加的简洁。
	let length = array.length;
	while (length--) {
		if (eq(array[length][0], key)) {
			return length;
		}
	}
	return -1;
}

export default assocIndexOf;

// var a = [[0, 'Bowen'],[1, 'Hui'], [2, 'John'], [3,'Jason']];
// console.log(assocIndexOf(a, 5)); // -1
// console.log(assocIndexOf(a, 3)); // 3
// console.log(assocIndexOf(a, '3')); // -1
// console.log(assocIndexOf(a, 'Bowen')); // -1







