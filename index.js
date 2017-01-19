const yahoo = 'http://ichart.finance.yahoo.com/table.csv?s=';
const got   = require('got');
const fs    = require('fs');
const path  = require('path');

var Converter = require("csvtojson").Converter;
var converter = new Converter({});

const input = path.join(__dirname, 'input');
fs.readFile(input, (err, data) => {
  const indexes = data.toString().split('\n');

  const promises = indexes.filter(r => r)
    .map(index => {
      return got(`${yahoo}${index}`)
      .catch(e => {
        return {};
      })
    });

  Promise.all(promises).then(data => {
    const result = data.map(entry => {
      return entry.body.split('\n')[1].split(',')[1];
    });


    console.log(result);
  })
});

