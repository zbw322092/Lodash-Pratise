/**
 * The base implementation of `clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
// 参数：一个需要被夹在中间的值，一个上限值，一个下限值
// 返回值：三个数中处于中间的值

function baseClamp(number, lower, upper) {
	if (number === number) {
		if (upper !== undefined) {
			number = number <= upper ? number : upper;
		}
		if (lower !== undefined) {
			number = number >= lower ? number : lower;
		}
	}
	return number;
}

export default baseClamp;

// 正确的使用
// console.log(baseClamp(3,1,5)); // 3
// console.log(baseClamp(0,1,5)); // 1
// console.log(baseClamp(10,1,5)); // 5
// console.log(baseClamp(3,3,3)); // 3


// // 错误的使用
// console.log(baseClamp(0,5,1)); // 5
// console.log(baseClamp(3,5,1)); // 5


// console.log(baseClamp(10,null,null)); // null
// console.log(baseClamp(10,-10,null)); // null   null会被转换成0. Number(null)结果是0
// console.log(baseClamp({},10,20)); // 20  {}和数字比较都会返回false
