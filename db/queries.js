const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'photo_display',
});

const getPhotos = (id, callback) => {
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${id}`, callback);
};

const updatePhoto = (id, callback) => {
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${id}`, callback);
};

const deletePhoto = (id, callback) => {
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${id}`, callback);
};

const addPhoto = (id, callback) => {
  pool.query(`SELECT * FROM photos WHERE restaurant_id = ${id}`, callback);
};

module.exports = {
  getPhotos,
  updatePhoto,
  deletePhoto,
  addPhoto,
};
