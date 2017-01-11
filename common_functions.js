var objectProto = Object.prototype;
var nativeObjectToString = objectProto.toString;
module.exports = {
	// 这个值被typeof判断为object或者function，且这个值不是null的时候，下列函数返回true，否则为false
	// 要点：
	// typeof的可能值。
	// null的相等性。
	isObject: function (value) {
		var type = typeof value;
		return value !== null && (type === 'object' || type === 'function');
	},
	// 检测一个数值是否可以用做数组长度这个属性值。
	// 需要满足的条件：
	// 1. 是一个数字类型数值
	// 2. 整数
	// 3. 大于等于0
	// 4. 小于等于2^53-1
	// 
	// 这里要做类型检查的原因在于，我们如果传入一个空的字符串，下列的检查结果都会是true。
	isLength: function(value) {
		return typeof value === "number" && 
			value % 1 === 0 && value >= 0 && value <= Number.MAX_SAFE_INTEGER;
	},
	// 通过调用Object原型中的toString方法来生成一个string，我们可以从这个string中获得类的信息。
	objectToString: function(value) {
		return nativeObjectToString.call(value);
	}
};

/* ***************************TESTING***************************************** */
// console.log(module.exports.isObject(function() {})); // true
// console.log(module.exports.isObject({})); // true
// console.log(module.exports.isObject(undefined)); // false
// console.log(module.exports.isObject(null)); // false
// console.log(module.exports.isObject(1234)); // false
// console.log(module.exports.isObject('it is a string')); // false
// console.log(module.exports.isObject(false)); // false
// console.log(module.exports.isObject()); // false  在必传入的实参没有传的时候，这个实参被当做undefined处理


// console.log(module.exports.isLength('')); // false
// console.log(module.exports.isLength(0)); // true
// console.log(module.exports.isLength('0')); // false
// console.log(module.exports.isLength(NaN)); // false
// console.log(module.exports.isLength()); // false
// console.log(module.exports.isLength(undefined)); // false
// console.log(module.exports.isLength(Number.MAX_SAFE_INTEGER)); // true
// console.log(module.exports.isLength(Number.MAX_SAFE_INTEGER + 1)); // false
// console.log(module.exports.isLength(Infinity)); // false
// console.log(module.exports.isLength(-0)); // true
// console.log(module.exports.isLength(1.23)); // false

console.log(module.exports.objectToString({name: 'bowen'})); // [object Object]
console.log(module.exports.objectToString(123)); // [object Number]
console.log(module.exports.objectToString('it is a string')); // [object String]
console.log(module.exports.objectToString(function(){})); // [object Function]
console.log(module.exports.objectToString(null)); // [object Null]
console.log(module.exports.objectToString(undefined)); // [object Undefined]
console.log(module.exports.objectToString(NaN)); // [object Number]
console.log(module.exports.objectToString([1,2,3])); // [object Array]


































