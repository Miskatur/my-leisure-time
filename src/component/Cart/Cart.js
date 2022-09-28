import React from 'react';
import Personal from '../Personal/Personal';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart)
    return (
        <div className='cart'>
            <Personal></Personal>


        </div>
    );
};

export default Cart;