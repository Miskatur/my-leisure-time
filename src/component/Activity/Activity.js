import React, { useEffect, useState } from 'react';
import Task from '../Task/Task';
import './Activity.css'

const Activity = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('activity.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleAddToCart = (selectedTask) => {

    }

    return (
        <div>
            <div className='full-container'>
                <div className='activity-container'>
                    {
                        activities.map(task => <Task task={task}
                            key={task.id}
                            handleAddToCart={handleAddToCart}
                        ></Task>)
                    }
                </div>

                <div className='cart-container'>
                    <h2>heuyj ju</h2>
                </div>
            </div>
        </div>
    );
};

export default Activity;