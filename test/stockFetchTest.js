const assert = require('assert');
const stockFetch = require('../lib/stockfetcher');

describe('stockFetch', ()=>{
  it('should load data', done => {
    const getTickersFromFile = function(fileName){
      assert.equal(fileName, 'inputFileName');
      return Promise.resolve(['A', 'B', 'C']);
    };
    const getTickerPrices = function(data){
      assert.deepEqual(data, ['A', 'B', 'C']);
      return Promise.resolve([1,2,3]);
    };
    const printReport = function(data){
      assert.deepEqual(data, [1,2,3]);
    };

    const fetch = stockFetch({getTickersFromFile, getTickerPrices, printReport});

    fetch('inputFileName').then(() => done()).catch(done);
  })
});


