/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * isObject({});
 * // => true
 *
 * isObject([1, 2, 3]);
 * // => true
 *
 * isObject(Function);
 * // => true
 *
 * isObject(null);
 * // => false
 */
// 参数：一个待检查的值
// 返回值：这个待检查的值是否是object类型的值
function isObject(value) {
	// return (typeof value === 'object' || typeof value === 'function') && (value !== null);
	// 根据上面的写法的改进版本（也许会带来执行效率上的提升，待考证）：
	// 下面的改进点在于：
	// 	将value != null前置了，如果是null或者undefined就直接排除，不用执行后面的操作。
	// 	命名了type方法
	// 暂时不明确的一点：为什么在比较的时候使用了非严格判断的==
	const type = typeof;
	return value != null && (type value == 'object' || type value == 'function');
}

export default isObject;