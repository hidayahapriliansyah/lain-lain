// fetch still not working

// const axios = require('axios');

import axios from 'axios';

const getBooks = async () => {
  try {
    const books = await axios.get('https://ipinfo.io/?token=4022e207a7f899');
    const buku = books.data;
    console.log(buku);
    return buku;
  } catch (error) {
    console.log(error);
  }
};

getBooks();

// axios.get('http://localhost:5000/books')
//   .then(res => res.data)
//   .then(data => console.log(data))
//   .catch(e => console.log(e));