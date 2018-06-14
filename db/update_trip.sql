update trips
set trip_name=$2, description=$3, dates=$4, price=$5, trip_pic=$6
where id=$1;
