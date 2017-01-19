module.exports = function({ fetchPrices, processPrices }){
  return function(index){
    return fetchPrices(index).then(processPrices);
  }
};
