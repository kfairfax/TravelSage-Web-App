CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(80),
  user_pic TEXT,
  is_admin BOOLEAN,
  auth_id TEXT
);
