import React from 'react';

const Tour =(props) => {
    const{tour}=props;
    return(
    
        <div>
           <img src={tour.trip_pic} alt='trip picture'/>
           <br/>
           <span>{tour.trip_name}</span>
           <br/>
           <span>{tour.description}</span>
           <br/>
           <span>{tour.dates}</span>
           <br/>
           <span>{tour.price}</span>
        </div>
    )

};

export default Tour;
