// Custom myIncludes method
Array.prototype.myIncludes = function (element) {
	return this.indexOf(element) !== -1;
};

// Custom myIndexOf method
Array.prototype.myIndexOf = function (element) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === element) {
			return i;
		}
	}
	return -1;
};

// Custom myPush method
Array.prototype.myPush = function (elementToAdd) {
	this[this.length] = elementToAdd;
	return this.length;
};

function runMyIncludes() {
	const inputString = document.getElementById("inputArray").value;
	const inputArray = inputString.split(",");
	const includesArg = document.getElementById("includesArg").value;
	const result = inputArray.myIncludes(includesArg);
	document.getElementById("includes_result").innerHTML = result;
}

function runMyIndexOf() {
	const indexString = document.getElementById("indexArray").value;
	const indexArray = indexString.split(",");
	const indexOfArg = document.getElementById("indexOfArg").value;
	const result = indexArray.myIndexOf(indexOfArg);
	document.getElementById("indexOf_result").innerHTML = result;
}

function runMyPush() {
	const pushString = document.getElementById("pushArray").value;
	const pushArray = pushString.split(",");
	const pushArg = document.getElementById("pushArg").value;
	pushArray.myPush(pushArg);
	document.getElementById("push_result").innerHTML =
		JSON.stringify(pushArray);
}
