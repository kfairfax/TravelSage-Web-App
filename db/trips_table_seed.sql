CREATE TABLE trips (
  id SERIAL PRIMARY KEY,
  trip_name VARCHAR(80),
  description TEXT,
  dates VARCHAR(30),
  price INTEGER,
  trip_pic TEXT
);
