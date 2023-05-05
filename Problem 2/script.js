// Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
// For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [];

function multiply() {
	for (let i = 0; i < numbers.length; i++) {
		let sum = 1;
		for (let j = 0; j < numbers.length; j++) {
			if (i !== j) {
				sum *= numbers[j];
			}
		}
		newNumbers.push(sum);
	}
	return newNumbers;
}

console.log(multiply());
