/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
// 参数：一个目标对象，一个key值，一个value值
// 返回值：被定义了属性之后的object
function baseAssignValue(object, key, value) {
	if (key === '__proto__') {
		Object.defineProperty(object, key, {
			configurable: true,
			enumerable: true,
			value: value,
			writable: true
		});
	} else {
		object[key] = value;
	}
}

export default baseAssignValue;

// var a = {};
// baseAssignValue(a, 'name', 'Bowen');
// baseAssignValue(a, 'age', 23);
// baseAssignValue(a, '__proto__', 'Can I Do It?');
// baseAssignValue(a, undefined, undefined);
// baseAssignValue(a, null, null);
// baseAssignValue(a, NaN, NaN);
// console.log(a);