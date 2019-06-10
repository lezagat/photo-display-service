DROP KEYSPACE IF EXISTS photo_display;

CREATE KEYSPACE photo_display
  WITH REPLICATION = { 
   'class' : 'SimpleStrategy', 
   'replication_factor' : 1 
  };

USE photo_display;

CREATE TABLE photos (
   restaurant_id int PRIMARY KEY,
   restaurant_name text,
   photos list<text>,
);

CREATE INDEX photos_restaurant_name ON photos(restaurant_name);

COPY photos (restaurant_id,restaurant_name,photos) FROM './db/fake-data-nosql/rawData.csv';
