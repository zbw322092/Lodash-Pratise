import baseAssignValue from './baseAssignValue.js';
import eq from '../eq.js';

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
// 变量：一个目标对象，一个key值，一个value值
// 返回：没有返回值，只是进行赋值操作。
// 这里我们只想给own property赋值
// 这个函数做的事情：给一个对象的属性赋值，除非这个对象已经有这个属性且值相等。还有一种情况也可以赋值，就是
// 赋的值是undefined，且这个object中不存在这个key。
function assignValue(object, key, value) {
	const objValue = object[key];
	if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || 
		(value === undefined && !(key in object))) {
		baseAssignValue(object, key, value);
	}
}

export default assignValue;

// var a = {name:'Bowen', age: 24};
// assignValue(a, 'name', 'Bowen2');
// assignValue(a, 'height', undefined);
// console.log(a); // { name: 'Bowen2', age: 24, height: undefined }