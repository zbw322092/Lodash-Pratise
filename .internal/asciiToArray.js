/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
// 参数：一个string
// 返回值：一个从string转换而来的array
// 注意，string的split方法做的事就是将string分割到一个array中。不会改变原来的string。
function asciiToArray(string) {
	return string.split('');
}

export default asciiToArray;

// console.log(asciiToArray("")); // []
// console.log(asciiToArray("string")); // [ 's', 't', 'r', 'i', 'n', 'g' ]
// console.log(asciiToArray({name: 'Bowen'})); // 报错

