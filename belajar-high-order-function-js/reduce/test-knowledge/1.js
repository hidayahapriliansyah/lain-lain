// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

const numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));

// function myFunc(total, num) {
//   console.log(total);
//   return total - num;
// }

numbers.reduce((total, num) => {
  console.log(total, num);
  // return total - num;
});

// console.log(result);