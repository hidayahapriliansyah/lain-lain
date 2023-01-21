const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

/** output : [13, 67, 54]; */
// const min = Math.min(...input.map(el => el.age));
// const max = Math.max(...input.map(el => el.age));
// const selisih = Math.abs(min - max);
// const result = [min, max, selisih];

const ages = input.map(person => person.age);
const result = [ min = Math.min(...ages), max = Math.max(...ages), min - max];
console.log(result);
