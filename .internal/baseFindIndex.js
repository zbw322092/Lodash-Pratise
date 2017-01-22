'use strict';
/**
 * The base implementation of `findIndex` and `findLastIndex`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
// 这个function要做的事情是按照一定的条件在一个array中筛选出符合条件的index。我们可以指定index起始位置，
// 也可以指定是否从右边开始筛选。一旦找到了符合条件的index就停止查找，查找结束还没找到的话返回未找到。
// 步骤：
// 	根据设置来确定从哪个元素开始循环
// 	然后确定是从左边开始循环还是从右边开始
// 	根据之前的判断来循环每个元素
//		根据一定的条件来测试元素是否符合
//			只要找到一个符合的，则返回这个值
//			如果没有，则返回未找到
function baseFindIndex(array, predicate, fromIndex, fromRight) {
	const length = array.length;
	let index = fromIndex + (fromRight ? 1 : -1);

	while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;

  // 下面是我的写法。没有官方代码来的简洁。
	// if (fromRight) {
	// 	while (--index > -1) {
	// 		if (predicate(array[index], index, array)) {
	// 			return true
	// 		}
	// 	}
	// 	return -1;
	// } else {
	// 	while (++index < length) {
	// 		if (predicate(array[index], index, array)) {
	// 			return true
	// 		}
	// 	}
	// 	return -1;
	// }
}

var a = [1,2,3,4,5,6,7,8,9];
var predicateFunc = function(value, key, array) {
	if (value % 6 === 0)
		return true;
}

var predicateFuncTwo = function(value, key, array) {
	if (value % 2 === 1)
		return true;
}

console.log(baseFindIndex(a, predicateFunc, 6)); // -1
console.log(baseFindIndex(a, predicateFunc, 6, true));  // 5

console.log(baseFindIndex(a, predicateFuncTwo, 0)); // 0
console.log(baseFindIndex(a, predicateFuncTwo, 1, true)); // 0


// var i = 0;
// while (i-- >= 0) {
// 	console.log('It works, here'); // 被执行了一次
// }
// while (--i >= 0) {
// 	console.log('It works'); // 未被执行
// }


var i = 5;
// while (i-- > 0) {
// 	console.log(i); // 4 3 2 1 0
// }
// console.log(i); // -1

// while (--i > 0) {
// 	console.log(i); // 4 3 2 1
// }
// console.log(i); // 1





