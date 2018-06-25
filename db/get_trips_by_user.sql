SELECT * FROM users_trips
join users on users_trips.user_id = users.id
join trips on users_trips.trip_id = trips.id
where users.id = $1;
