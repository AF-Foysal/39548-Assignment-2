Array.prototype.mySome = function mySome(condition) {
	for (let i = 0; i < this.length; i++) {
		if (condition(this[i])) {
			// if condition is true then return true
			return true;
		}
	}
	return false; // if nothing satisfies condition return false
};

Array.prototype.myEvery = function myEvery(condition) {
	for (let i = 0; i < this.length; i++) {
		if (!condition(this[i])) {
			// if condition is true then return true
			return false;
		}
	}
	return true;
};

Array.prototype.myReduce = function myReduce(callBack) {
	if (this.length == 0) {
		return "impossible";
	}
	let accumulator = this[0];
	for (let i = 1; i < this.length; i++) {
		accumulator = callBack(accumulator, this[i], i, this);
	}
	return accumulator;
};

function checkSome() {
	// user input to create an array
	const inputArray = document
		.getElementById("inputArraySome")
		.value.split(",")
		.map(Number);

	// use my some on greater than 10 function
	const hasElementGreaterThan10 = inputArray.mySome(
		(element) => element > 10
	);

	// display result on html
	const outputElement = document.getElementById("output_some");
	outputElement.innerHTML = `Array Contains an Element greater than 10: ${hasElementGreaterThan10}`;
}

function checkEvery() {
	// Get user input from the input field and split it into an array
	const inputArray = document
		.getElementById("inputArrayEvery")
		.value.split(",")
		.map(Number);

	// Use myEvery to check if every element is less than 40
	const allElementsLessThan40 = inputArray.myEvery((element) => element < 40);

	// Display the result on the HTML page
	const outputElement = document.getElementById("output_every");
	outputElement.innerHTML = `Every element in the array is less than 40: ${allElementsLessThan40}`;
}

function calculateSum() {
	// Get user input from the input field and split it into an array
	const inputArray = document
		.getElementById("inputArrayReduce")
		.value.split(",")
		.map(Number);

	// Use myReduce to calculate the sum of all elements
	const sum = inputArray.myReduce(
		(accumulator, current) => accumulator + current,
		0
	);

	// Display the result on the HTML page
	const outputElement = document.getElementById("output_reduce");
	outputElement.innerHTML = `Sum of all elements: ${sum}`;
}
