module.exports = function({readTickersFromFile, extractTickers}){
  return function (fileName){
    return readTickersFromFile(fileName).then(extractTickers);
  }
};
