import React from 'react';
import { Link } from 'react-router-dom';

const Tour = (props) => {
    const { tour } = props;

    const style = {
        width: '400px',
        height: '250px'
    };

    return (
        <div>
                <span>{tour.trip_name}</span>
                <br/>
        <Link to={'/tour/' + tour.id}>
                <img style={style} src={tour.trip_pic} alt='' />
        </Link>
                
            </div>
    )

};

export default Tour;
