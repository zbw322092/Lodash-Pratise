/**
 * The base implementation of `isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
// 判断是否是NaN。方法很简单，就是判断自己是否等于自己，不等的话就是NaN
function baseIsNaN(value) {
	return value !== value;
}

export default baseIsNaN;

// console.log(baseIsNaN(123));
// console.log(baseIsNaN());
// console.log(baseIsNaN(''));
// console.log(baseIsNaN(NaN)); // true