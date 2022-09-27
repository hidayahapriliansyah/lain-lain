const links = document.querySelectorAll('.links');
const section = document.querySelectorAll('section');

function activeMenu() {
  let len = section.length;

  while (--len && window.scrollY + 97 < section[len].offsetTop) {}
  links.forEach((ltx) => ltx.classList.remove('active'));
  links[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);
