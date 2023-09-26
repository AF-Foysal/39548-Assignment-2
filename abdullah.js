// myEach Demonstration
function demo1() {
	// Collect the input array and Initialize the result array
	const input = Array.from(document.getElementsByName("array1[]"));
	const result = [];

	// Use myEach on input Array
	input.myEach((element) => result.push(2 * element.value));

	// Create output strings for result Div
	let inputString = "Input Array Values: ";
	let resultString = "Result Array Values: ";

	// Loop through input Array and create inputString
	for (let i = 0; i < input.length; i++) {
		let a = input[i];
		inputString = inputString + "input[" + i + "] = " + a.value + " ";
	}

	// Loop through result Array and create resultString
	for (let i = 0; i < result.length; i++) {
		let b = result[i];
		resultString = resultString + "result[" + i + "] = " + b + " ";
	}

	// Insert the output strings onto HTML
	document.getElementById("originalArray1").innerHTML = inputString;
	document.getElementById("resultArray1").innerHTML = resultString;
}

// myMap Demonstration
function demo2() {
	const input = Array.from(document.getElementsByName("array2[]"));

	const result = input.myMap((x) => x.value ** 3);

	// Create output strings for result Div
	let inputString = "Input Array Values: ";
	let resultString = "Result Array Values: ";

	// Loop through input Array and create inputString
	for (let i = 0; i < input.length; i++) {
		let a = input[i];
		inputString = inputString + "input[" + i + "] = " + a.value + " ";
	}

	// Loop through result Array and create resultString
	for (let i = 0; i < result.length; i++) {
		let b = result[i];
		resultString = resultString + "result[" + i + "] = " + b + " ";
	}

	// Insert the output strings onto HTML
	document.getElementById("originalArray2").innerHTML = inputString;
	document.getElementById("resultArray2").innerHTML = resultString;
}

// myFilter Demonstration
function demo3() {
	const input = Array.from(document.getElementsByName("array3[]"));
	const result = input.myFilter((word) => word.value.length > 6);

	// Create output strings for result Div
	let inputString = "Input Array Values: ";
	let resultString = "Result Array Values: ";

	// Loop through input Array and create inputString
	for (let i = 0; i < input.length; i++) {
		let a = input[i];
		inputString = inputString + "input[" + i + "] = " + a.value + " ";
	}

	// Loop through result Array and create resultString
	for (let i = 0; i < result.length; i++) {
		let b = result[i];
		resultString = resultString + "result[" + i + "] = " + b.value + " ";
	}

	// Insert the output strings onto HTML
	document.getElementById("originalArray3").innerHTML = inputString;
	document.getElementById("resultArray3").innerHTML = resultString;
}

// myEach() implementation
Array.prototype.myEach = function myEach(callback) {
	// Iterate through the Array Object
	for (let i = 0; i < this.length; i += 1) {
		// If Object at index exists, then apply callback to Object at index i
		if (this.hasOwnProperty(i)) {
			callback(this[i], i, this);
		}
	}
};

// myMap() implementation
Array.prototype.myMap = function myMap(callback) {
	// Initialize a const ArrayObject
	const result = [];
	// Iterate through the Array Object
	for (let i = 0; i < this.length; i += 1) {
		// If Object at index exists, then apply callback to Object at index i and push to result Array
		if (this.hasOwnProperty(i)) {
			result.push(callback(this[i], i, this));
		}
	}
	return result;
};

// myFilter() implementation
Array.prototype.myFilter = function myFilter(callback) {
	// Initialize a const ArrayObject
	const result = [];
	// Iterate through the Array Object
	for (let i = 0; i < this.length; i++) {
		// If Object at index exists and meets the condition, then push Object to result array
		if (this.hasOwnProperty(i) && callback(this[i], i, this)) {
			result.push(this[i]);
		}
	}
	return result;
};

/* 

Abdullah's Testing Code

const arr = [1, 2, 3, 4, 5];

// Built-In
arr.forEach((element) => console.log(element * element));
console.log("-------");
// testing myEach()
arr.myEach((element) => console.log(element * element));

// Built-In
const result1 = arr.map((element) => element ** 3);
console.log(result1);
console.log("-------");
// testing MyMap()
const result2 = arr.myMap((element) => element ** 3);
console.log(result2);

const words = [
	"spray",
	"limit",
	"elite",
	"exuberant",
	"destruction",
	"present",
];

// Built-In
const resultF1 = words.filter((word) => word.length > 6);
console.log(resultF1);
console.log("-------");
// testing MyFilter()
const resultF2 = words.myFilter((word) => word.length > 6);
console.log(resultF2);

*/
