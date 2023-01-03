const renderQuery = (search) => {
  if(search) {
    const newSearch = search.replace('?', '').split('&');
    const obj = {};
    newSearch.forEach((el) => {
      const data = el.split('=');
      obj[data[0]] = data[1];
    });
    return obj;
  }
};

export default renderQuery;