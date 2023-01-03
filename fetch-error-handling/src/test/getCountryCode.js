const getCountryCode = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}?fullText=true`
    );
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if(!response.ok) {
      const error = new Error();
      if(data.status) {
        const { status, message } = data;
        error.name = 'InputError';
        error.message = `${status} | ${message}. Country with name ${country} not found`;
        error.cause = 'Input country name is invalid';
        throw error;
      } else {
        const { status } = response;
        const { message } = data;
        error.name = 'UrlError';
        error.message = `${status} | ${message}. Please check and input valid URL addreess`;
        error.cause = 'Invalid URL address';
        throw error;
      }
    }

    const countryCode = data[0].cca2;
    return countryCode;

  } catch (error) {
    if(error.name === 'TypeError') {
      error.name = 'Network Error';
      error.message = 'Check if your connection is online, or you request into invalid server address';
    };

    return error;
  }
};

export default getCountryCode;