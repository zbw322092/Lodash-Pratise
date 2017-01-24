import assignValue from './assignValue.js';
import baseAssignValue from './baseAssignValue.js';

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
// 参数：一个copy from的对象，一个copy to的对象，哪些properties需要被copy，一个定制copy value的function.
function copyObject(source, props, object, customizer) {
	// let length = props.length;
	// while (length--) {
	// 	object[props[length]] = customizer(source[props[length]]);
	// }
	// return object;

	// 上面的是自己实现的，和官方的代码差别主要在于官方代码对传入的参数做了一些处理。
	const isNew = !object;
	object || (object = {});

	let index = -1;
	const length = props.length;

	while (++index < length) {
		const key = props[index];

		// 这里也对于customizer是否存在做了处理。
		let newValue = customizer
			? customizer(object[key], source[key], key, object, source)
			: undefined;

		// 这样写了过滤了customizer返回值也是undefined的情况
		if (newValue === undefined) {
			newValue = source[key];
		}

		// 这里区分了copy to的对象是否是{}的情况
		if (isNew) {
			baseAssignValue(object, key, newValue);
		} else {
			assignValue(object, key, newValue);
		}
	}
	return object;
}

export default copyObject;

// var source = {
// 	name: 'Bowen',
// 	height: 183,
// 	weight: 80,
// 	age: 24,
// 	tel: undefined
// };

// var targetObject = {},
// 	targetObject2 = {'name': 'Hui'},
// 	targetObject3;

// var props = ['name', 'age', 'company'];
// var customizer = function (objectProperty, sourceProperty, key, object, source) {
// 	return 'Bowen personal: ' + sourceProperty
// };
// var customizer2 = function (objectProperty, sourceProperty, key, object, source) {
// 	return undefined;
// };

// console.log(copyObject(source, props, targetObject, customizer));
// console.log(copyObject(source, props, targetObject2, customizer));
// console.log(copyObject(source, props, targetObject3, customizer));

// console.log(copyObject(source, props, targetObject, customizer2));









