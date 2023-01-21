// calculate median and mean

// const input = [12, 46, 32, 64];

// /** result   { mean: 38.5, median: 32 } */

// input
//   .reduce((accumulator, number) => {
//     return accumulator.mean;
//   });

// console.log(input);

// const input = [12, 46, 32, 64];
// input.sort((a, b) => a - b);

// input.reduce(
//   (accumulator, currentValue, index, array) => {
//     console.log('accumulator', accumulator);
//     console.log('current', currentValue);
//     accumulator.mean += currentValue / array.length;

//     if (Math.abs(index + 1 - array.length / 2) < 1) {
//       accumulator.median = currentValue;
//     }

//     return accumulator;
//   },
//   { mean: 0, median: 0 }
// );

// console.log(input);

const input = [12, 46, 32, 64];
input.sort((a, b) => a - b);

const result =  input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (Math.abs(index + 1 - array.length / 2) < 1) {
      accumulator.median = currentValue;
    }

    return accumulator;
  },
  { mean: 0, median: 0 }
);

console.log(result);