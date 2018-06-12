CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  trip_name VARCHAR(80),
  description TEXT,
  dates VARCHAR(30),
  price VARCHAR(10),
  trip_pic TEXT
);
