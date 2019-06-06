const faker = require('faker');
const fs = require('fs');
const zlib = require('zlib');
const { imageUrls, restaurantNames } = require('./data.js');

const generateNums = (n) => {
  const numbers = [];
  for (let i = 0; i < n; i += 1) {
    numbers.push(i);
  }
  return numbers;
};

const rawDataPath = `${__dirname}/fake-data-sql/rawData.csv`;
const compressedDataPath = `${__dirname}/fake-data-sql/compressedData.csv`;
const arr = generateNums(30);
const stream = fs.createWriteStream(rawDataPath);
let i = 0;

const generateRecords = () => {
  while (i < 10000000) {
    const n = faker.random.number({ min: 7, max: 10 });
    faker.helpers.shuffle(arr);
    const newArr = arr.slice(0, n).map(num => imageUrls[num]);
    const name = faker.random.arrayElement(restaurantNames);
    let str = '';
    for (let j = 0; j < newArr.length; j += 1) {
      str += `${i + 1},${name},${newArr[j]}\n`;
    }
    if (!stream.write(str)) {
      return;
    }
    i += 1;
  }
  stream.end();
  console.timeEnd('generate records');
  console.time('zip');
  const readStream = fs.createReadStream(rawDataPath);
  const writeStream = fs.createWriteStream(compressedDataPath);
  const zip = zlib.createDeflate();
  readStream.pipe(zip).pipe(writeStream).on('finish', () => {
    readStream.destroy();
    writeStream.end();
    fs.unlinkSync(rawDataPath);
    console.timeEnd('zip');
  });
};

stream.on('drain', () => {
  generateRecords();
});
console.time('generate records');
generateRecords();
