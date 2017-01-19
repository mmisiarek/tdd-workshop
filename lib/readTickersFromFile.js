module.exports = function(fs) {
  return function(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, 'UTF-8', (err, data) => {
        if(err) { return reject ('Cannot find file'); }
        resolve(data);
      });
    });
  }
};

