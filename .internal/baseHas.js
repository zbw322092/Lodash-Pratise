/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * The base implementation of `has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
// 参数：一个对象，一个需要检查的key
// 返回值：这个key值是否存在在这个object中
function baseHas(object, key) {
	// 一开始像下面这样写，问题在于，如果object传入的是Undefined或null，会报错：
	// TypeError: Cannot convert undefined or null to object
	// 所以改成了下面的样子。
	// return hasOwnProperty.call(object, key);
	
	return object != null && hasOwnProperty.call(object,key);
}

export default baseHas;

// var a = {
// 	name: 'Bowen',
// 	age: 24
// };
// console.log(baseHas(a, 'name')); // true
// console.log(baseHas(a, undefined)); // false
// console.log(baseHas(a, null)); // false
// console.log(baseHas(a)); // false
// // console.log(baseHas(undefined, 'name')); // false
// // console.log(baseHas(null, 'name')); // false
// console.log(baseHas('string', 'name')); // false
// console.log(baseHas('string', '0')); // true
// console.log(baseHas(['name', 'age', 'company'], '0')); // true
// console.log(baseHas(['name', 'age', 'company'], 'name')); // false
// console.log(baseHas(123, '0')); // false