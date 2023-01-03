const value1 = 0 || 'default';
console.log(value1);

const value2 = '' || 1000;
console.log(value2);

// kalau pakai || nilai 0 atau '' dianggap false

const value3 = 0 ?? 'default';
console.log(value3);

const value4 = '' ?? 1000;
console.log(value4);