const data = {
  nama: 'Adi',
  umur: 21,
};

const data2 = {
  'nama': 'Hidayah',
  'umur': 21,
};

const stringifyData2 = '{ "nama": "Hidayah", "umur": 21 }';

console.log('data', typeof data);
console.log('data2', data2);
console.log('json stringify', JSON.stringify(data));
console.log('stringify', JSON.parse(stringifyData2));