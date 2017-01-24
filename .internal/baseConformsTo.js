'use strict';
/**
 * The base implementation of `conformsTo` which accepts `props` to check.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 */
// 参数：一个源数组，一个目标数组，一个包含properties的array
function baseConformsTo(object, source, props) {
	let length = props.length;
	if (object == null) {
		return !length;
	}

	while(length--) {
		const key = props[length];
		const predicate = source[key];
		const value = object[key];

		// 这里value === undefined && !(key in object)的意思也就是如果value是undefined，且是因为
		// key在这个object中不存在引起的，那么就返回false
		if ((value === undefined && !(key in object)) || !predicate(value)) {
			return false;
		}

		// 注意下面的写法和上面的写法的区别。下面写法的问题在于，如果predicate不存在，predicate(value)这里就会首先报错。
		// if (!predicate(value) || (value === undefined && !(key in object))) {
		// 	return false;
		// }
	}
	return true;
}

export default baseConformsTo;

// var object = {name: 'Bowen', age: 23, height: 183};
// var object2 = {name: 'Bowen', age: 23, height: 183, company: undefined};
// var source = {
// 	name: function(value) {
// 		return value.length < 20
// 	},
// 	age: function(value) {
// 		return (typeof value === 'number') && (18 <= value <= 30);
// 	},
// 	height: function(value) {
// 		return value !== undefined;
// 	},
// 	company: function(value) {
// 		return value == undefined;
// 	}
// };
// var props = ['name', 'age'];
// var props2 = ['name', 'age', 'height'];
// var props3 = ['name', 'age', 'height', 'company'];
// var props4 = [];

// console.log(baseConformsTo(object, source, props)); // true
// console.log(baseConformsTo(object, source, props2)); // true
// console.log(baseConformsTo(object, source, props3)); // false
// console.log(baseConformsTo(object2, source, props3)); // true
// console.log(baseConformsTo(object, source, props4)); // true

