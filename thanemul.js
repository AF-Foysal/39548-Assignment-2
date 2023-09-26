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
  const inputArray = JSON.parse(document.getElementById('inputArray').value);
  const includesArg = document.getElementById('includesArg').value;
  const result = inputArray.myIncludes(includesArg);
  document.getElementById('includesResult').textContent = result;
}

function runMyIndexOf() {
  const indexArray = JSON.parse(document.getElementById('indexArray').value);
  const indexOfArg = document.getElementById('indexOfArg').value;
  const result = indexArray.myIndexOf(indexOfArg);
  document.getElementById('indexOfResult').textContent = result;
}

function runMyPush() {
  const pushArray = JSON.parse(document.getElementById('pushArray').value);
  const pushArg = document.getElementById('pushArg').value;
  pushArray.myPush(pushArg);
  document.getElementById('pushResult').textContent = JSON.stringify(pushArray);
}
