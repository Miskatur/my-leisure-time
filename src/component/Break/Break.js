import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h2>Add a Break</h2>
            <div className='time-box'>
                <h5 className="time">5</h5>
                <h5 className="time">10</h5>
                <h5 className="time">15</h5>
                <h5 className="time">20</h5>
                <h5 className="time">25</h5>
            </div>

        </div>
    );
};

export default Break;