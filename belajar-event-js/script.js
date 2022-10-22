const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

grandparent.addEventListener('click', (e) => {
  console.log('grandparent');
}, { capture : true });

parent.addEventListener('click', () => {
  console.log('parent');
}, { capture : true })

child.addEventListener('click', () => {
  console.log('child');
}, { capture : true })

grandparent.addEventListener('click', (e) => {
  console.log('grandparent');
});

parent.addEventListener('click', () => {
  console.log('parent');
})

child.addEventListener('click', () => {
  console.log('child');
})