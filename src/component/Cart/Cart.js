// import React, { useState } from 'react';
// import Break from '../Break/Break';


import React from 'react';
import Personal from '../Personal/Personal';
import TimeManagement from '../TimeManagement/TimeManagement';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const time of cart) {
        total = total + time.time;
    }

    const handleToast = () => {
        // toast("You have Completed your Todays task")
        console.log('clicked')
        toast("You have Completed your Todays task")
    }

    return (
        <div className='cart'>
            <Personal></Personal>
            {/* <Break ></Break> */}
            <TimeManagement total={total}></TimeManagement>
            <button id='btn-complete' onClick={handleToast}><p>Activities Completed</p></button>
            <ToastContainer />

        </div>
    );
};

export default Cart;