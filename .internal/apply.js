'use strict';
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
// ++++ (为什么像下面这样写原因不明确)
function apply (func, thisArg, args) {
	switch (args.length) {
		case 0: return func.call(thisArg);
		case 1: return func.call(thisArg, args[0]);
		case 2: return func.call(thisArg, args[0], args[1]);
		case 3: return func.call(thisArg, args[0], args[1], args[2]);
	}
	return func.apply(thisArg, args);
}

export default apply;




// var f = function () {
// 	var index = -1,
// 		sum = 0,
// 		length = arguments.length;

// 	while (++index < length) {
// 		sum += arguments[index];
// 	}

// 	return this.a + this.b + sum;
// }

// var o = {
// 	a: 1,
// 	b: 2
// }

// console.log(apply(f, o, [])); // 3
// console.log(apply(f, o, [1])); // 4
// console.log(apply(f, o, [1,2])); // 6
// console.log(apply(f, o, [1,2,3])); // 9
// console.log(apply(f, o, [1,2,3,4])); // 13
