/**
 * The base implementation of methods like `findKey` and `findLastKey`
 * which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the found element or its key, else `undefined`.
 */
// 参数：一个collection，类型是array，一个作用于collection上的iteration函数，一个作用于每次遍历值的函数
// 返回值：如果有值使得predicate结果是true，那么给result赋值，但是返回false；否则返回undefined
function baseFindKey(collection, predicate, eachFunc) {
	let result;
	eachFunc(collection, (value, key, collection) => {
		if (predicate(value, key, collection)) {
			result = key;
			return false;
		}
	});
	return result;
}

export default baseFindKey;