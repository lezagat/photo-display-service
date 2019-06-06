DROP TABLE photos;

CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id INTEGER NOT NULL,
  restaurant_name VARCHAR(100) NOT NULL,
  photo_url VARCHAR(255)
);

COPY photos(restaurant_id, restaurant_name, photo_url) 
FROM '/Users/michellehuang/Desktop/LeZagat/photo-display-service/db/fake-data-sql/rawData.csv' WITH (FORMAT csv);