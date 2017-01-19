require('co-mocha');
const fs = require('fs');
const mockFs = require('./mocks/fs.js');
const readTickersFromFile = require('../lib/readTickersFromFile');
const assert = require('assert');
const path = require('path');
const td = require('testdouble');


describe('readTickersFromFile', function() {
  it('[integration] should work', function*() {

    const read = readTickersFromFile(fs)(path.join(__dirname, '..', 'input'));

    const data = yield read;

    assert.equal('GOOG\nAAPL\nORCL\nMSFT\n', data);
  })

  it('[mock] should read content of file', function*() {
    const read = readTickersFromFile(mockFs);
    const data = yield read('filename');
    assert.equal('content', data);

  });

  it('[mock tool] should read content of file td', function*() {
    const tdfs = { readFile: td.function() };
    td.when(tdfs.readFile('filename', 'UTF-8')).thenCallback(null, 'content');

    const read = readTickersFromFile(tdfs);
    const data = yield read('filename');
    assert.equal('content', data);

  });

  //it('[mock] should handle non existing file', function *(){
    //const fs = {
      //readFile: function(fileName, encoding, callback){
        //callback()
      //}
    //}
  //})

  it('[integration] should handle non existing file', function *(){

    const read = readTickersFromFile(fs)(path.join(__dirname, '..', 'non-existing-input-file'));

    try {
      const data = yield read;
      throw 'Not should get there';
    } catch (e){
      assert.equal(e, 'Cannot find file')
    }


  })
});

