/*
  Write your code in the corresponding method
  Please note: You must also add the correct arguments to the methods
*/

//Exercise 1
const findFactorial = function (num, product = 1) {
  if (num === 1 || num === 2) {
    return num * product;
  }
  return findFactorial(num - 1, product * num);
};

//Exercise 2
const reverseString = function (rev, leftOfString) {
  if (str === "") {
    return "";
  }
  return reverseString(str.slice(1)) + str[0];
};

//Exercise 3
const arr1 = [1, 2, 3];
const arr2 = [];

const swap = function (arr1, arr2) {
  if (arr1.length === 0) {
    return;
  }
  const element = arr1.pop();

  swap(arr1, arr2);

  arr2.push(element);
};
swap(arr1, arr2);
console.log(arr1); //[]
console.log(arr2); //[1, 2, 3]

/* DO NOT REMOVE THE EXPORTS BELOW */
module.exports = { findFactorial, reverseString, swap };
