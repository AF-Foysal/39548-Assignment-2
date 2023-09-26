# 39548-Assignment-2

Goal:

To improve your understanding of JavaScript syntax and functions, and to better understand JavaScript and Array methods.

Requirements:

75% - Assignmnet functionality
50% Recreated Methods
25% On-Page Demonstrations
25% - GitHub workflow
Assignment:

JavaScript:

Consider the following methods of Array instances and static Object methods and recreate them using JavaScript. For each method, review the linked documentation and make sure your understand what each method is designed to do and do not use any of the Original Methods in implementing your Recreated Methods. Note what each Original Method takes as an argument, as well as their expected return values.

Methods	Recreated Methods	Description
Array.prototype.forEach()	myEach()	Without using the native “Array.prototype.forEach” method of JavaScript, compose a function titled “myEach” that will take in an array of elements and execute any callback function on each of those elements.
Array.prototype.map()	myMap()	Without using the native “Array.prototype.map” method of JavaScript, compose a function titled “myMap” that will take in an array of elements and create a new array populated with the results of calling a provided callback function on every element on the input array.
Array.prototype.filter()	myFilter()	Without using the native “Array.prototype.filter” method of JavaScript, compose a function titled “myFilter” that will take in an array of elements and return a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
Array.prototype.some()	mySome()	Without using the native “Array.prototype.some” method of JavaScript, compose a function titled “mySome” that will take in an array of elements and returns true if it finds an element in the array for which the provided function returns true; otherwise return false.
Array.prototype.every()	myEvery()	Without using the native “Array.prototype.every” method of JavaScript, compose a function titled “myEvery” that will take in an array of elements and returns true if, for the provided function, every element in the array returns true; otherwise return false.
Array.prototype.reduce()	myReduce()	Without using the native “Array.prototype.reduce” method of JavaScript, compose a function titled “myReduce” that will take in an array of executes the supplied function on each element of the array, in order, reducing accross all elements of the array and returning a single value.
Array.prototype.includes()	myIncludes()	Without using the native “Array.prototype.includes” method of JavaScript, compose a function titled “myIncludes” that will take in an array of elements and indicate whether or not a target element is contained within the input array. This returns a boolean.
Array.prototype.indexOf()	myIndexOf()	Without using the native “Array.prototype.indexOf” method of JavaScript, compose a function titled “myIndexOf” that will take in an array of elements and returns the index of the first encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
Array.prototype.push()	myPush()	Without using the native “Array.prototype.push” method of JavaScript, compose a function titled “myPush” that will take in an array of elements as well as an elementToAdd and append that element to the end of the array.
Array.prototype.lastIndexOf()	myLastIndexOf()	Without using the native “Array.prototype.lastIndexOf” method of JavaScript, compose a function titled “myLastIndexOf” that will take in an array of elements and returns the index of the last encounter of a target element (if it is found) or -1 if that element does not exist within the input array.
Object.keys()	grabKeys()	Without using the native “Object.keys()” method of JavaScript, compose a function titled “grabKeys” that will take in an object and return all of the keys of the key:value pairs of that object.
Object.values()	grabValues()	Without using the native “Object.values()” method of JavaScript, compose a function titled “grabValues” that will take in an object and return all of the values of the key:value pairs of that object.


HTML:

Create one or more pages that demonstrate the Recreated Methods. For each method, there should be three divs and one button:

Input Div: This shows the input Array or Object
For the Array methods, this should show the individual elements in the array
For the Object methods, this should show the key-value pairs of the Object
Argument Div: This shows the additional argument input to the Method.
For Recreated Methods that take a function argument, include either a text description of the function
For mySome(), myEvery(), my Includes(), myIndexOf(), myPush(), myLastIndexOf(), include the element that is the second argument
For grabKeys() and grabValues() do not include the Argument Div
Result Div: This shows the result of running the Recreated Method on the Input Array or Object
Button: Pressing this button should take the input and argument, run the Recreated Method, and populate the Result Div
It is highly recommended that you do a generic version of the HTML, rather than making a new version for each Recreated Method

Github:

This is a group assignment. Each team should create a repo and make all of their code changes using the feature branch workflow. They should deploy their changes to GitHub Pages and submit a link to the page. Only one person from each team needs to submit the link to their site.

Extra Credit:

5% - Include a CSS that spaces the divs for each Recreated Method in an elegant fashion
5% - Allow the Input Div to take in user inputs to the array, which are properly acted on by the Recreated Method and included in the Result Div
5% - Allow the Argument Div for for mySome(), myEvery(), my Includes(), myIndexOf(), myPush(), myLastIndexOf() to take in user inputs via a text field, which are properly acted on by the Recreated Method
