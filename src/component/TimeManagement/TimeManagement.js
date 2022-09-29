import React from 'react';

const TimeManagement = (props) => {
    return (
        <div>
            <h2>Time Management : </h2>
            <h3>Total Time : {props.total}</h3>
            <h3>Break Time : </h3>
        </div>
    );
};

export default TimeManagement;