const input = "George Raymond Richard Martin";

/** output "GRRM"; */

const result =  input
  .split(' ')
  .map(el => el[0])
  .join('');

console.log(result);