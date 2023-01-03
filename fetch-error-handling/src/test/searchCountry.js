const searchCountry = async (params) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${params}&appid=971ff58a13ef05c641cd145c35a1f33c`
    );
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if(!response.ok) {
      const error = new Error();
      const { cod, message } = data;

      if(cod === 401) {
        error.name = 'KeyError';
        error.message = message;
        error.cause = 'Invalid API Key';
        throw error;
      }

      if(message === 'city not found') {
        error.name = 'InputError';
        error.message = `${cod} | ${message}`;
        error.cause = 'City on input is not found';
        throw error;
      }

      error.name = 'UrlError';
      error.message = `${cod} | Please check and input valid URL addreess`;
      error.cause = message;
      throw error;
    }

    return data;
  } catch (error) {
    if(error.name === 'TypeError') {
      error.name = 'NetworkError';
      error.message = 'Check if your connection is online, or you request into invalid server address';
    };
    return error;
  }
};

export default searchCountry;