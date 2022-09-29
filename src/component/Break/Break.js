import React from 'react';
import './Break.css'

const Break = () => {
    return (
        <div>
            <h2>Add a Break</h2>
            <div className='time-box'>
                <button className="time">5</button>
                <button className="time">10</button>
                <button className="time">15</button>
                <button className="time">20</button>
                <button className="time">25</button>
            </div>

        </div>
    );
};

export default Break;