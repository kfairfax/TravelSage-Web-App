select trip_id, trip_name, count(*) 
from users_trips 
join trips on users_trips.trip_id = trips.id
group by users_trips.trip_id, trips.trip_name;