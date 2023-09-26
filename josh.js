//Code Below Written by Joshua Ramcharan
const object1 = {
  apple: "green",
  banana: "yellow",
  peach: "orange",
};

function parsedArray(text) {
  const splitArray = text.split(" ");
  const parsedArr = [];
  let x = 0;
  for (let i = 0; i < splitArray.length; i++) {
    x = Number(splitArray[i]);
    parsedArr.push(x);
  }
  return parsedArr;
}

function myLastIndexOf(target, arr) {
  let lastIndex = 0;
  if (arr.includes(target)) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        lastIndex = i;
      }
    }
    return lastIndex;
  } else {
    return -1;
  }
}

function grabKeys(obj1) {
  const keys = [];
  for (const [key] of Object.entries(obj1)) {
    keys.push(`${key}`);
  }
  return keys;
}

function grabValues(obj1) {
  const values = [];
  for (const [key, value] of Object.entries(obj1)) {
    values.push(`${value}`);
  }
  return values;
}

const lastOfButton = document.body.querySelector("#lastIndexButton");
const lastIndexResult = document.body.querySelector(".lastIndexResult");

lastOfButton.addEventListener("click", () => {
  var userArr = document.getElementById("lastIndexText").value;
  var userTarget = document.getElementById("lastIndexArgument").value;
  const numTarget = Number(userTarget);
  console.log(userArr);
  console.log(userTarget);
  const lastIndexOf = myLastIndexOf(numTarget, parsedArray(userArr));
  lastIndexResult.textContent = lastIndexOf;
});

const keysButton = document.body.querySelector("#keys-button");
const keysResult = document.body.querySelector(".keys-result");
keysButton.addEventListener("click", () => {
  keysResult.textContent = grabKeys(object1);
});

const valueButton = document.body.querySelector("#values-button");
const valuesResult = document.body.querySelector(".values-result");
valueButton.addEventListener("click", () => {
  valuesResult.textContent = grabValues(object1);
});

/* **** TESTS **********

  const arr = [1, 2, 3, 4, 5];
  console.log("First Test: ", myLastIndexOf(4, arr));
  console.log("----------------------------");

  console.log("Second Test: ", grabKeys(object1));
  console.log("----------------------------");

  console.log("Third Test: ", grabValues(object1));
  console.log("----------------------------");
  console.log("Fourth Test: ", parsedArray("1 2 3 4 5"));
*/
