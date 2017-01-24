import baseAssignValue from './baseAssignValue.js';
import eq from '../eq.js';

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
// 参数：目标对象，一个key值，一个value值
// 返回值：没有返回值，只是进行赋值
// 给一个对象自己的属性进行赋值，只要这个值和已经存在的值不相等，且这个值不是undefined。
// 或者现在这个对象没有这个属性，且要赋值的属性值是undefined。
function assignMergeValue(object, key, value) {
	// 注意，这里我们不需要在使用Object.prototype.hasOwnProperty来检测是否存在这个属性，因为我们限制不能是
	// undefined，所以相等成立的时候这个属性在对象中必然是存在的。
	if ((value !== undefined && !eq(object[key], value)) || 
		(value === undefined && !(key in object))) {
		baseAssignValue(object, key, value);
	}
}

export default assignMergeValue;

// var a = {name: 'Bowen', age: 23};
// assignMergeValue(a, 'name', undefined);
// assignMergeValue(a, 'age', 24);
// assignMergeValue(a, 'height', 183);
// assignMergeValue(a, 'weight', 80);
// console.log(a); // { name: 'Bowen', age: 24, height: 183, weight: 80 }