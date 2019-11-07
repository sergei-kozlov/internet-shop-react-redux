import React from 'react';
import './cart.css'
import Basket from '../basket';


import ShopHeader from '../../components/shop-header';

const Cart = () => {
    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <ShopHeader />
                    <Basket />
                </div>
            </div>
        </div>

    );
};

export default Cart;