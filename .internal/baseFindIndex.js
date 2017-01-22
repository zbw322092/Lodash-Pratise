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
// 	循环每个元素
// 
function baseFindIndex(array, predicate, fromIndex, fromRight) {

}