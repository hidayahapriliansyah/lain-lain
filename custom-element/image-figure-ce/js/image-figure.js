class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log('Using Constructor from HTMLELement')
  }

  connectedCallback() {
    // console.log('This Component is created and connected!');
    this.src = this.getAttribute('src') || null;
    this.alt = this.getAttribute('alt') || null;
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        figure {
          border: thin #c0c0c0 solid;
          display: flex;
          flex-flow: column;
          padding: 5px;
          max-width: 220px;
          margin: auto;
        }

        figure > img {
          max-width: 220px;
        }

        figure > figcaption {
          background-color: #222;
          color: #fff;
          font: italic smaller sans-serif;
          padding: 3px;
          text-align: center;
        }
      </style>
      
      <figure>
        <img src="${this.src}" alt="${this.alt}">
        <figcaption>${this.caption}</figcaption>
      </figure>
    `;
  }

  // si atrrbiturchange blabla ini fungsinya buat ngamatin attribut yang berubah nilainya
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  // static ini berarti si nama attribut yang di return bisa diubah, SALAH
  // method ini berfungsi buat mengamati attribute (mengobserved)
  static get observedAttributes() {
    return ['caption', 'alt', 'src'];
  }
};

customElements.define('image-figure', ImageFigure);