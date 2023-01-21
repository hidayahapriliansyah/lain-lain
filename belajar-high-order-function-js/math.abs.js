// The Math.abs() static method returns the absolute value of a number.
/** source : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs */

function difference(a, b) {
  return Math.abs(a - b);
}

console.log(difference(3, 5));
// expected output: 2

console.log(difference(5, 3));
// expected output: 2

console.log(difference(1.23456, 7.89012));
// expected output: 6.6555599999999995