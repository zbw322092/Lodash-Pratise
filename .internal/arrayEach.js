/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
// 这里使用到了ES6中的let和const语句
function arrayEach(array, iteratee) {
	let index = -1;
	const length = array == null ? 0 : array.length;

	while (++index < length) {
		if (iteratee(array[index], index, array) === false) {
			break;
		}
	}
	return array;
}

export default arrayEach;

var a = [1,2,3,4,5];
function loopOne() {
	for (var i = 0; i < a.length; i++) {
		console.log(a[i]);
	}
}
// loopOne(); // 1 2 3 4 5

function loopTwo() {
	for (var i = 0; i < a.length; i++) {
		(function() {
			console.log(a[i]);
		})();
	}
}
// loopTwo(); // 1 2 3 4 5

function loopThree() {
	for (var i = 0; i < a.length; i++) {
		setTimeout(
		function() {
			console.log(a[i]);
		},100);
	}
}
// loopThree(); // 五个undefined

function loopFour() {
	for (var i = 0; i < a.length; i++) {
		setTimeout(
		function() {
			console.log(a[i]);
		});
	}
}
// loopFour(); // 五个undefined

function loopFive() {
	for (let i = 0; i < a.length; i++) {
		setTimeout(
		function() {
			console.log(a[i]);
		});
	}
}
// loopFive(); // 1 2 3 4 5

function loopSix() {
	for (let i = 0; i < a.length; i++) {
		setTimeout(
		function() {
			console.log(a[i]);
		}, 1000);
	}
}
// loopSix(); // 1 2 3 4 5