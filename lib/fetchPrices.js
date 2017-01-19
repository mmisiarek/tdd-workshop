const endpoint = 'http://ichart.finance.yahoo.com/table.csv?s=';

module.exports = function(http){
  return function(indexes){
    const promises = indexes.map(index => {
      const url = `${endpoint}${index}`;
      return http(url);
    });
    return Promise.all(promises);
  }
};
