require('co-mocha');

const assert = require('assert');
const getTickersFromFile = require('../lib/getTickersFromFile');

describe('getTickersFromFile', function () {
  it('should load file', function *() {

    const readTickersFromFile = function(fileName) {
      assert.equal(fileName, 'inputFile')
      return Promise.resolve('A\nB\nC');
    }

    const extractTickers = function(fileContent) {
      assert.equal(fileContent, 'A\nB\nC');
      return ['A', 'B', 'C'];
    }

    const result = yield getTickersFromFile({ readTickersFromFile, extractTickers })('inputFile');

    assert.deepEqual(result, ['A', 'B', 'C']);

  })
});
