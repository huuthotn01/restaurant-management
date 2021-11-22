
import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import Example from './dropdown';
import './payment.css'
import Bill from './Bill';
import CartProvider from '../food_ordering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView from './NavigationView';
import CartContext from '../food_ordering/components/Cart/CartController/CartContext';

function Payment() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    // const totalAmount = `${cartContext.totalAmount.toFixed(0)} VND`;
    return (
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView onShowCart={showCartHandler} />
        </CartProvider>
    );
}
export default Payment;