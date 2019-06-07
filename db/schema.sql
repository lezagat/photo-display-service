CREATE TABLE photos (
  photo_id SERIAL PRIMARY KEY,
  restaurant_id INTEGER NOT NULL,
  restaurant_name VARCHAR(100) NOT NULL,
  photo_url VARCHAR(255)
);

CREATE INDEX photos_photo_id ON photos(photo_id);
CREATE INDEX photos_restaurant_id ON photos(restaurant_id);
CREATE INDEX photos_restaurant_name ON photos(restaurant_name);

COPY photos(restaurant_id, restaurant_name, photo_url) 
FROM '/Users/michellehuang/Desktop/LeZagat/photo-display-service/db/fake-data-sql/rawData.csv' WITH (FORMAT csv);