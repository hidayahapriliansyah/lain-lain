const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


grandparent.addEventListener('click', () => {
  // target = grandparent;
  console.log('grandparent');
});

// parent.addEventListener('click', (e) => {
//   e.stopPropagation()
//   console.log('parent');
// },);

// child.addEventListener('click', (e) => {
//   e.stopPropagation()
//   console.log('child');
// },);

// console.log(e.target);
// console.log(target);
