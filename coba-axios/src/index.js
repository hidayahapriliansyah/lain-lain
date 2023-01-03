const axios = require('axios');

// const getData = async () => {
//   try {
//     const data = await axios.get('https://www.boredapi.com/api/activity');
//     return data;
//   } catch (e) {
//     return e;
//   }
// }

// console.log(getData());

async function getUser() {
  try {
    const response = await axios.get('https://www.boredapi.com/api/activity');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

getUser();