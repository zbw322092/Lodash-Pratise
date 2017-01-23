/** Used to match words composed of alphanumeric characters. */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
// 这个函数做的事情就是将传入的参数用上面的正则表达式进行检验，如果检验通过，则返回由符合正则的字符串组成的数组，如果检验不通过，则返回空数组。
function asciiWords(string) {
	return string.match(reAsciiWord) || [];
}

export default asciiWords;

// console.log(asciiWords('it is a string')); // [ 'it', 'is', 'a', 'string' ]
// console.log(asciiWords('str****ing')); // [ 'str', 'ing' ]
// console.log(asciiWords('****')); // []  实际是null，但是函数里面处理掉了

// 如果我们把上面的g flag取掉，我们看下结果
// console.log(asciiWords('it is a string')); // [ 'it', index: 0, input: 'it is a string' ]
// console.log(asciiWords('str****ing')); // [ 'str', index: 0, input: 'str****ing' ]
// console.log(asciiWords('****')); // []  实际是null，但是函数里面处理掉了