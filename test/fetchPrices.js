require('co-mocha');
const assert = require('assert');
const got = require('got');
const fetchPrices = require('../lib/fetchPrices');

describe('fetchPrices', function () {
  it('[integration] should work', function*() {
    const fp = fetchPrices(got);

    const prices = yield fp(['GOOG', 'INVALID']);
    debugger;
    console.log(prices);
  })
});

