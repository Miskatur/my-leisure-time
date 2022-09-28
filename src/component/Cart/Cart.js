import React from 'react';
import Break from '../Break/Break';
import Personal from '../Personal/Personal';
import './Cart.css'

const Cart = (props) => {

    const { cart } = props;
    console.log(cart)
    return (
        <div className='cart'>
            <Personal></Personal>
            <Break></Break>

        </div>
    );
};

export default Cart;