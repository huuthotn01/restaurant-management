
import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from '../PaymentModel/Bill';
import CartProvider from '../../FoodOrdering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView from './NavigationView';
import { LoginContext } from '../../SharedComponent/LoginContext';
import { Redirect, Switch } from 'react-router';

function Payment() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <LoginContext.Consumer>
    {data => data.role === "2" ? (
      <Switch>
        <Redirect to='/manage' />
      </Switch>
    ) : (
        <div class="row w-100 pt-5 ps-2">
            <div class="d-flex justify-content-center">
            <div class="col-2 pe-3"> 
            <img class="img-fluid mai" src="/assets/images/404.png" alt=""/>
              </div>
           
              <div class="col-7 themain">
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView onShowCart={showCartHandler} />
        </CartProvider>  
      </div>
      <div class="col-2 ps-3">  
      <img class=" img-fluid mai" src="/assets/images/404.png" alt=""/>
              </div>
              
            </div>   
            </div>  
            )}
    
    </LoginContext.Consumer>
    );
}
export default Payment;