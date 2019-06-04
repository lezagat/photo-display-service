const faker = require('faker');
const { imageUrls, restaurantNames } = require('./data.js');
const fs = require('fs');
const zlib = require('zlib');

const generateNums = (n) => {
  const numbers = [];
  for (let i = 0; i < n; i += 1) {
    numbers.push(i);
  }
  return numbers;
};

const arr = generateNums(30);

const generateRecords = () => {
  const records = [];
  for (let i = 0; i < 100000; i += 1) {
    const n = faker.random.number({ min: 7, max: 10 });
    faker.helpers.shuffle(arr);
    const newArr = arr.slice(0, n).map(num => imageUrls[num]);

    records.push({
      restaurantId: i + 1,
      name: faker.random.arrayElement(restaurantNames),
      photos: newArr,
    });
  }

  return records;
};

const compress = (records) => {
  const promise = new Promise((resolve, reject) => {
    zlib.deflate(JSON.stringify(records), (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
  return promise;
}

const writeFile = (index, data) => {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(`${__dirname}/fakeData/data${index}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
  return promise;
}

async function asyncCall() {
  for (let i = 1; i <= 100; i++) {
    const records = generateRecords();
    await compress(records)
      .then((data) => writeFile(i, data))
      .then(() => console.log('write file'))
      .catch((err) => {
        throw err;
      });
  }
}

asyncCall();