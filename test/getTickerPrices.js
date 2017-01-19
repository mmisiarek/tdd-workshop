require('co-mocha');

const assert = require('assert');
const getTickersPrices = require('../lib/getTickersPrices');

describe('getTickerPrices', function () {
  it('should fetch data', function *() {

    const fetchPrices = function(indexes) {
      assert.deepEqual(indexes, ['GOOG', 'APPL'])
      return Promise.resolve(['response1','response2']);
    }

    const processPrices = function(csv) {
      assert.deepEqual(['response1','response2'], csv);
      return Promise.resolve([1,2]);
    }

    const result = yield getTickersPrices({ fetchPrices, processPrices })(['GOOG', 'APPL']);

    assert.deepEqual(result, [1,2]);

  })
});
