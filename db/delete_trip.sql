DELETE from users_trips
where trip_id = $1;

DELETE FROM trips
where id=$1;