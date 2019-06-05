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

const arr = generateNums(30);

const generateRecords = (val) => {
  const records = [];
  const startIndex = 100000 * val;
  for (let i = startIndex; i < startIndex + 100000; i += 1) {
    const n = faker.random.number({ min: 7, max: 10 });
    faker.helpers.shuffle(arr);
    const newArr = arr.slice(0, n).map(num => imageUrls[num]);
    const name = faker.random.arrayElement(restaurantNames);
    for (let j = 0; j < newArr.length; j += 1) {
      records.push(`
        ${i + 1},
        ${name},
        ${i + 1},
        ${newArr[j]}
      `);
    }
  }
  return records.join('\n');
};

const compress = (records) => {
  const promise = new Promise((resolve, reject) => {
    zlib.deflate(records, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return promise;
};

const writeFile = (index, data) => {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/fake-data-sql/data${index}.csv`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
  return promise;
};

async function asyncCall() {
  for (let i = 0; i < 100; i += 1) {
    const records = generateRecords(i);
    await compress(records)
      .then(data => writeFile(i, data))
      .then(() => console.log(`write file ${i}`))
      .catch((err) => {
        throw err;
      });
  }
}

asyncCall();
