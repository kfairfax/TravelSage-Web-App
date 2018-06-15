module.exports = {
    getTrips: (req, res) => {
        const db = req.app.get('db');
        db.get_trips()
            .then(trips => res.status(200).send(trips))
            .catch(()=>res.status(500).send('Failed'))
    },

    createTrip: (req, res) => {
        const { trip_name, description, dates, price, trip_pic } = req.body;
        const db = req.app.get('db');
        db.create_trip([trip_name, description, dates, price, trip_pic])
            .then(trip => res.status(200).send('All good!'))
            .catch(()=>res.status(500).send('Failed'))
    },

    getTrip: (req, res) => {
        const{params}=req;
        const db = req.app.get('db');
        db.get_trip([params.tourId])
            .then(trip => res.status(200).send(trip))
            .catch(()=>res.status(500).send('Failed'))
    },

    updateTrip: (req, res)=>{
        const{trip_name, description, dates, price, trip_pic}=req.body;
        const{tourId}=req.params;
        const db=req.app.get('db');
        db.update_trip([tourId, trip_name, description, dates, price, trip_pic])
        .then(()=>res.status(200).send('We good!'))
        .catch(()=>res.status(500).send('Failed'))
    },

    deleteTrip:(req, res)=>{
        const{tourId}=req.params;
        const db=req.app.get('db');
        db.delete_trip([tourId])
        .then(()=>res.status(200).send('Good!'))
        .catch(()=>res.status(500).send('Failed'))
    }
}