INSERT INTO users
(user_name, user_pic, is_admin, auth_id)
VALUES
($1, $2, $3, $4)
RETURNING *;


