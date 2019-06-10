const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream(`${__dirname}/fake-data-sql/compressedData.csv`);
const writeStream = fs.createWriteStream(`${__dirname}/fake-data-sql/rawData.csv`);
const unzip = zlib.Inflate();

fileContents.pipe(unzip).pipe(writeStream).on('finish', () => {
  console.log('upzip!');
});
