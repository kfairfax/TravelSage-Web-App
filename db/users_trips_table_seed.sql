CREATE TABLE users_trips (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users (id),
  trip_id INT REFERENCES trips (id)
);
