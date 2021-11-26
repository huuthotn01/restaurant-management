
import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from './Bill';
import CartProvider from '../FoodOrdering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView from './NavigationView';

function Payment() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        
   
     <div class="row w-100 pt-5">
            <div class="d-flex justify-content-center">
            <div class="col-1"> 
            <img class="img-fluid" src="/assets/images/404.png" alt=""/>
              </div>
           
              <div class="col-4 themain">
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView onShowCart={showCartHandler} />
        </CartProvider>  
      </div>
      <div class="col-1">  
      <img class=" img-fluid" src="/assets/images/404.png" alt=""/>
              </div>
              
            </div>   
            </div>  
         
    );
}
export default Payment;