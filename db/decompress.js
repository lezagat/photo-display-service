const fs = require('fs');
const zlib = require('zlib');

const fileContents = fs.createReadStream('./db/fake-data-sql/compressedData.csv');
const writeStream = fs.createWriteStream('./db/fake-data-sql/rawData.csv');
const unzip = zlib.createInflate();

fileContents.pipe(unzip).pipe(writeStream);
