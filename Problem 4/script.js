// PROBLEM #4
// Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.

function exampleFunction() {
	console.log('Hello World');
}

function runFunctionAfterDelay(f, d) {
	setTimeout(f, d);
}

runFunctionAfterDelay(exampleFunction, 3000);
