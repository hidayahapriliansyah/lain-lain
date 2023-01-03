const getIpInfo = async () => {
  try {
    const response = await fetch('https://ipinfo.io/?token=4022e207a7f899');
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    if(!response.ok) {
      const error = new Error();
      const { status } = data;
      const { title, message } = data.error;
      error.name = 'KeyError';
      error.message = `${status} | ${message}`;
      error.cause = title;
      throw error;
    };

    if(response.ok && !data) {
      const error = new Error();
      const { status } = response;
      error.name = 'UrlError';
      error.message = `${status} | Please input valid URL path`;
      error.cause = 'Invalid URL path';
      throw error;
    }

    return data;
  } catch (error) {
    if(error.name === 'TypeError') {
      error.name = 'Network Error';
      error.message = 'Check if your connection is online, or you request into invalid server address';
    };
    return error;
  }
};

export default getIpInfo;