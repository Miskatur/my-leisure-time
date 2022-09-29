import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import TimeManagement from '../TimeManagement/TimeManagement';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    let total = 0;
    for (const time of cart) {
        total = total + time.time;
    }
    return (
        <div className='cart'>
            <Personal></Personal>
            <Break></Break>
            <TimeManagement total={total}></TimeManagement>
            <button id='btn-complete'><p>Activities Completed</p></button>

        </div>
    );
};

export default Cart;