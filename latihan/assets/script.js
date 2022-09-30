const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// email js

function sendMail() {
  var messageParams = {
    from_name: document.querySelector('#name-message').value,
    from_email: document.querySelector('#email-message').value,
    message: document.querySelector('#message-message').value,
  };

  emailjs.send('service_vvax746', 'template_cj9l29b', messageParams).then(
    function (response) {
      alert('Sukses mengirim pesan!', response.status, response.text);
    },
    function (error) {
      console.log('Gagal mengirim pesan!', error);
    }
  );
}

// active menu
const links = document.querySelectorAll('.links');
const sectionLink = document.querySelectorAll('.section-link');

function activeMenu() {
  let len = sectionLink.length;

  while (--len && window.scrollY + 97 < sectionLink[len].offsetTop) {}
  links.forEach((ltx) => ltx.classList.remove('active'));
  links[len].classList.add('active');
}

activeMenu();
window.addEventListener('scroll', activeMenu);
