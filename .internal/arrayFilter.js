/**
 * A specialized version of `filter` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
// 步骤
// 	循环每个元素
// 		看这个元素是否能通过检验
// 			如果通过，则加入到结果中
// 			如果不通过，则忽略
function arrayFilter(array, predicate) {
	let index = -1;
	let resIndex = 0;
	const length = array == null ? 0 : array.length;
	const result = [];

	// while (++index < length) {
	// 	if (predicate(array[index], index, array)) {
	// 		result.push(array[index]);
	// 	}
	// }

	// 官方代码中的写法
  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }

  return result;
}

var a = [1,2,3,4,5,6];
var predicateFunc = function(value, key, array) {
	if (value % 2 === 0) {
		return true;
	}
};
console.log(arrayFilter(a,predicateFunc)); // [ 2, 4, 6 ]


export default arrayFilter;
