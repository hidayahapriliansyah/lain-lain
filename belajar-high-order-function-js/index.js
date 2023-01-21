const input = [1, -4, 12, 0, -3, 29, -150];

/** output 42; */

// let hasil = 0;
// const output = input.filter(n => n > 0).forEach(n => hasil += n);
const output = input
  .filter(n => n > 0)
  .reduce((total, num) => {
    return total + num;
  });

console.log(output);