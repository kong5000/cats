// asyncBreeds.js
const fs = require('fs');
const breedDetails = require('./syncBreeds');

const breedDetailsFromFile = function(breed, cb) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if(error){
      cb(undefined);
      return;
    }
    cb(data);
  });
};
module.exports = breedDetailsFromFile;