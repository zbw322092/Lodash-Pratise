/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
	set.add(value);
	return set;
}

// console.log(addSetEntry(new Set(), null)); // Set { null }
// console.log(addSetEntry(new Set(), [1,2,3])); // Set { [ 1, 2, 3 ] }

export default addSetEntry;