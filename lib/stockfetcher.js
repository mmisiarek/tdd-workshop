module.exports = function({getTickersFromFile, getTickerPrices, printReport}){
  return function(inputName){
    return getTickersFromFile(inputName).then(getTickerPrices).then(printReport);
  }
};
