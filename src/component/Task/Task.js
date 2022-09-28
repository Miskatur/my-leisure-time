import React from 'react';
import './Task.css'

const Task = (props) => {
    const { handleAddToCart } = props;
    const { time, img, name } = props.task;
    return (
        <div className='task'>
            <img src={img} alt="" />
            <div className='activity-info'>
                <h2>{name}</h2>
                <p>Time spend : {time} minute</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.task)}>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Task;