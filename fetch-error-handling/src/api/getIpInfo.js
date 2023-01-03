const getIpInfo = async () => {
  try {
    const response = await fetch('https://ipinfo.io/?token=4022e207a7f899');

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;
    // console.log(isJson);

    if(!response.ok) {
      const { status } = data;
      const { title, message }= data.error;

      throw new Error(`${status} | ${message}`, { cause:  title });
      // const error = (data && data.message) || response.status;
      // return Promise.reject(error);

    } else {
      // const data = await response.json();
      // console.log('ipinfo', data);
      return data;
    }

  } catch (error) {
    // console.log('name', error.name);
    // console.log('message', error.message);
    // console.log('filename', error.fileName);
    // console.log('linenumber', error.lineNumber);
    // console.log('column number', error.columnNumber);
    // console.log('stack', error.stack);
    if(error.name === 'TypeError') {
      error.name = 'Network Error';
      error.message = 'Check if your connection is online, or you request into invalid server address';
    };
    // console.log(error);
    return error;
  }
};

export default getIpInfo;