import baseClamp from './baseClamp.js';
import copyArray from './copyArray.js';
import shuffleSelf from './shuffleSelf.js';

/**
 * A specialized version of `sampleSize` for arrays.
 *
 * @private
 * @param {Array} array The array to sample.
 * @param {number} n The number of elements to sample.
 * @returns {Array} Returns the random elements.
 */
// 参数：一个array，取n个elememts
// 返回值：取的这个n个元素的随机顺序的数组
// 在这里我们不想要改变原来数组的元素，所以这里我们就可以使用copyArray了。
function arraySampleSize(array, n) {
	// const length = array.length;
	// n = n === baseClamp(n, 0, length) ? n : length;
	// return shuffleSelf(array, n);

	// 上面的代码是自己写的，有几个问题
	// 1. n = n === baseClamp(n, 0, length) ? n : length;这句显得很冗余。因为baseClamp函数
	// 已经帮我们做了很多事情：
	// 	如果n介于0和length之间，取n
	// 	如果n小于0，取0
	// 	如果n大于length，取length
	// 以上baseClamp做的事情完全符合我们的需求。
	// 2. 我们更改了原来array中的元素。但是我们不想更改，所以要引入copyArray。
	// 写函数的时候我们需要考虑的事情之一就是我们是否想更改实参。
	// 3. const length = array.length; 这里命名的length在下面只用到了一次，我们可以不用单独的
	// 声明这个值，而可以在需要的时候直接使用它。当然，单独的命名一个新的length变量更加的清晰。
	// 下面是改进版：
	return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
}

export default arraySampleSize;

var a = [1,2,3,4,5,6,7,8];
console.log(arraySampleSize(a, 4));



