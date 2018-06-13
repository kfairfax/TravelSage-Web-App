module.exports={
    getTrips:(req, res)=>{
            const db=req.app.get('db');
            db.get_trips()
            .then(trips=>res.status(200).send(trips))
    }
}