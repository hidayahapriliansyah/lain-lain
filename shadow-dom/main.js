const divElement = document.createElement('div');

const shadowRoot = divElement.attachShadow({ mode: 'closed' });

const headingElement = document.createElement('h1');
headingElement.innerText = 'Ini merupakan konten di dalam shadow DOM';

shadowRoot.appendChild(headingElement);
shadowRoot.innerHTML += `
  <style>
    h1 {
      color: green;
    }
  </style>
`;
document.body.append(divElement);