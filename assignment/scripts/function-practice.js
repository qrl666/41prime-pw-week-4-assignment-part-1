console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return "Hello, " + name + "!";
}
// Remember to call the function to test
console.log(helloName("Bubu"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  let answer = firstNumber + secondNumber;
  return answer;
  // return firstNumber + secondNumber;
}

console.log(addNumbers(6, 4));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2) {
  let answer = num0 * num1 * num2;
  return answer;
}

console.log(multiplyThree(3, 5, 6));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.

// could not set this as if (arr1.length=0), showed as 'undefined', but not my return value undefined, it was not working

let arr1 = ["dog", "cat", "bird"];

let arr0 = [];

/*function getLast(arr1) {
  if (arr1.length < 1) {
    return "undefined";
  } else {
    return arr1[arr1.length - 1];
  }
}*/

//I did not understand that `` is different than a string ''. Still not entirely sure what `` denotes though... But this problem is much simpler now. 

function getLast(array) {
 
    return array[array.length - 1];
  
}

console.log(getLast(arr1));
console.log(getLast(arr0));

// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find(value, array) {
  for (let element of array) {
    if (element == value) {
      return true;
    } //if statement
  } //for of loop
  return false;
} //find function

console.log(find("bird", arr1));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  for (let element of string) {
    if (element == letter) {
      return true;
    }
  }
  return false;
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array

let arr2 = [-5, 9, -3, 4];

function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

console.log(sumAll(arr2));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function gimmePos(array) {
  let arr3 = [];
  for (let element of array) {
    if (element > 0) {
      arr3.push(element);
    } //if statement
  } // for loop
  return arr3;
} // function

console.log(gimmePos(arr2));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
// Challenge was to create a function that counted the number of true values in an array and returned the total value.

let howManyTrue = [true, false, true, true, true, false];

function countTrue(arr) {
  let noFalse = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      noFalse++;
    }
  }
  return noFalse;
}

console.log(countTrue(howManyTrue));
