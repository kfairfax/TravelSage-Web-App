import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { tour } = props;

    return (
        <div className="tourContainer">
          
            <div className="tourImage">

                <Link to={'/tour/' + tour.id}>
                    <img className="thumbnailImage" src={tour.trip_pic} alt='' />
                </Link>
            </div>

            <div className="tourName">
            <span>{tour.trip_name}</span>
    
            </div>

        </div>
    )

};

export default Tour;
