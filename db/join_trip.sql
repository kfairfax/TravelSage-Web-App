insert into users_trips(user_id, trip_id) 
values($1, $2)
RETURNING*;