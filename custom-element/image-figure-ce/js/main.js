import './image-figure.js';

let imageFigureElement = document.querySelector('image-figure');

if(!imageFigureElement) {
  imageFigureElement = document.createElement('image-figure');
}

imageFigureElement.setAttribute('src', 'img/img.jpg');
imageFigureElement.setAttribute('alt', 'Dicoding Logo');
imageFigureElement.setAttribute('caption', 'Huruf g dalam logo Dicoding');

document.body.appendChild(imageFigureElement);
