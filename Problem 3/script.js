// PROBLEM #3
// Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
// For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
// You can modify the input array in-place.

const numbers = [3, 4, -1, 0, 1, 4, 1, 6, 2, 5, 1, 3, 5, -5, -6];

const newnumbers = numbers.sort().filter((x) => x > 0);
let x = newnumbers[0];

function findNumber() {
	if (x > 1) {
		return 1;
	}
	for (let i = 1; i < newnumbers.length; i++) {
		let y = newnumbers[i];
		if (y - x != 1 && y - x != 0) {
			return x + 1;
		} else if (i === newnumbers.length - 1) {
			return (y += 1);
		}
		x = newnumbers[i];
	}
}
console.log(findNumber());
