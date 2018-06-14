import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { tour } = props;

    const style = {
        width: '400px',
        height: '250px'
    };

    return (
        <Link to={'/tour/' + tour.id}>
            <div>
                <img style={style} src={tour.trip_pic} alt='trip picture' />
                <br />
                <span>{tour.trip_name}</span>
            </div>
        </Link>
    )

};

export default Tour;
