const searchCountry = async (params) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=971ff58a13ef05c641cd145c35a1f33c`
    );

    const data = await response.json();

    if(!response.ok) {
      const { cod: status, message: message } = data;
      if( status === 401 ){
        //  invalid key
        throw new Error(`${status} | ${message}`, { cause: 'Invalid key'});
      } else if (status === '404') {
        // invalid city/location name
        throw new Error(`${status} | ${message}`, { cause: 'Invalid city/location input'});
      }
    }

    return data;
  } catch (error) {
    if(error.name === 'TypeError') {
      error.name = 'Network Error';
      error.message = 'Check if your connection is online, or you request into invalid server address';
    };

    // console.log(error);
    // console.log(error.cause);
    return error;
  }
};

searchCountry('tasikmalaya');

// export default searchCountry;