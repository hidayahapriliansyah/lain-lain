const input = 6;

const array = new Array(input).fill(null);

// console.log(array);

const result = array
  .map((currentValue, index) => index + 1)
  .reduce((accumulator, currentValue) => accumulator * currentValue);

console.log(result);