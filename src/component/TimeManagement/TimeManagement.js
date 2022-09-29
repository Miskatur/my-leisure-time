import React, { useState } from 'react';
import './Timemanagement.css'

const TimeManagement = (props) => {
    const [breakTime, setBreakTime] = useState(0)

    const handleBreakTime = (e) => {
        // const selectedBreak = e.key.innertext
        // setBreakTime(selectedBreak)
    }

    return (
        <div>
            <div>
                <h2>Add a Break</h2>
                <div className='time-box'>
                    <button onClick={handleBreakTime} className="time">5</button>
                    <button onClick={handleBreakTime} className="time">10</button>
                    <button onClick={handleBreakTime} className="time">15</button>
                    <button onClick={handleBreakTime} className="time">20</button>
                    <button onClick={handleBreakTime} className="time">25</button>
                </div>

            </div>
            <h2>Time Management </h2>
            <h3>Total Time : {props.total}</h3>
            <h3>Break Time : {breakTime} </h3>

        </div>
    );
};

export default TimeManagement;