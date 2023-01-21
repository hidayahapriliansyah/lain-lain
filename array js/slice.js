const name = ['Adi', 'Muhamad', 'Firmaansyah', 'Hidayah'];
console.log(name.slice(0,2));
// output : [ 'Adi', 'Muhamad' ]
// dibaca na teh dipotong dari mulai index 0 sampai sebelum index 2, ambil potongan itu 
console.log(name.slice(2));
// output : [ 'Muhamad', 'Firmaansyah', 'Hidayah' ]
// ieu mah dibacana berarti buang dari mulai index sebelum 1

// oke ieu berarti lain itungan index tapi siga itungan garis tiap value tina index na.
// | Adi, | Muhamad, | Firmansyah |
// 0      1          2            3
// lamun slice(0,2) maka nu diambilna
// 0-----1-----2 nilai antara border itu bakal dimbil

// lamun slice(2) berarti
// mulai ti 0 sampai 2
// 0---1---2 nialinya akan dibuang