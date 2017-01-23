/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function asciiSize({length}) {
	return length;
}

export default asciiSize;

// 注意，这里单独运行这个文件的时候需要加上兼容ES6的命令：node --harmony_destructuring asciiSize.js
// console.log(asciiSize('string')); // 6
// console.log(asciiSize({name: 'Bowen'})); // undefined
// console.log(asciiSize(function(v1,v2) {})); // 2
// console.log(asciiSize(undefined)); // 报错