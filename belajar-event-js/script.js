const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')


grandparent.addEventListener('click', (e) => {
  // target = grandparent;
  // e.stopPropagation();
  // if( e.target !== this ) {
  //   return;
  // }
  console.log('grandparent');
  // console.log(e.target !== this);ceritanya pengen stop event biar child gak ke click
});

parent.addEventListener('click', (e) => {
  // e.stopPropagation()
  console.log('parent');
},);

child.addEventListener('click', (e) => {
  // e.stopPropagation()
  console.log('child');
},);

// console.log(e.target);
// console.log(target);
