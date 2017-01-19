const extractTickers = require('../lib/extractTickers');
const assert = require('assert');

describe('extractTickers', function(){
  it('happy path', function(){
    const result = extractTickers('A\nB');
    const result2 = extractTickers('A');
    assert.deepEqual(['A', 'B'], result);
    assert.deepEqual(['A'], result2);
  });

  it('empty content passed', function(){
    const result = extractTickers('');
    const result2 = extractTickers('    ');
    const result3 = extractTickers();

    assert.deepEqual([], result);
    assert.deepEqual([], result2);
    assert.deepEqual([], result3);
  });


  it('bad content passed', function(){
    const result = extractTickers(2);
    const result2 = extractTickers();
    const result3 = extractTickers({});

    assert.deepEqual([], result);
    assert.deepEqual([], result2);
    assert.deepEqual([], result3);
  });

  it('almost good content', function(){
    const result = extractTickers('  APPL \nGOOG\n YAHH   ');
    const result2 = extractTickers('  APPL \n\nGOOG\n YAHH   ');

    assert.deepEqual(['GOOG'], result);
  })
});
