import isObject from '../isObject.js';

/**
 * The base implementation of `create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
// 参数：一个需要被继承的prototype
// 返回值：一个新的object
// 这个函数做的一个简单的处理就是判断下proto是不是对象，如果不是就直接返回一个空对象。
function baseCreate(proto) {
	return isObject(proto) ? Object.create(proto) : {};
}

export default baseCreate;

// var a = {
// 	name: 'Bowen',
// 	age: 24,
// 	company: undefined
// };
// var b = [1,2,3,4,5,6];
// var c = function() {};
// var d = 'string';
// var o = {};
// o.prototype = a;
// console.log(baseCreate(a));
// console.log(baseCreate(b));
// console.log(baseCreate(c));
// console.log(baseCreate(d));
// console.log(baseCreate(o));