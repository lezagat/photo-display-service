const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream(`${__dirname}/fake-data-nosql/compressedData.csv`);
const writeStream = fs.createWriteStream(`${__dirname}/fake-data-nosql/rawData.csv`);
const unzip = zlib.Inflate();

fileContents.pipe(unzip).pipe(writeStream).on('finish', () => {
  console.log('upzip!');
});
