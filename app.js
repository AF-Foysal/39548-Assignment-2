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

Array.prototype.myLastIndexOf = function myLastIndexOf(target) {
	// check if Object doesn't exist
	if (!this.includes(target)) {
		return -1;
	}
	for (let i = this.length - 1; i >= 0; i--) {
		if (this[i] == target) {
			return i;
		}
	}
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

// Built-In
const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

console.log(animals.lastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.lastIndexOf("Tiger"));
// Expected output: 1

console.log("-------");

console.log(animals.myLastIndexOf("Dodo"));
// Expected output: 3

console.log(animals.myLastIndexOf("Tiger"));
// Expected output: 1
