SELECT * FROM trips_users;
join users on trips_users.user_id = users.id
join trips on trips_users.trip_id = trips.id
where users.id = 2;
