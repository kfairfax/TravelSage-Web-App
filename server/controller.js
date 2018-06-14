module.exports = {
    getTrips: (req, res) => {
        const db = req.app.get('db');
        db.get_trips()
            .then(trips => res.status(200).send(trips))
    },

    createTrip: (req, res) => {
        const { trip_name, description, dates, price, trip_pic } = req.body;
        const db = req.app.get('db');
        db.create_trip([trip_name, description, dates, price, trip_pic])
            .then(trip => res.status(200).send('All good!'))
    },

    getTrip: (req, res) => {
        const{params}=req;
        const db = req.app.get('db');
        db.get_trip([params.tourId])
            .then(trip => res.status(200).send(trip))
    },
}