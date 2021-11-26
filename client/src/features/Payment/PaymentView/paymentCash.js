import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from '../PaymentModel/Bill';
import CartProvider from '../../FoodOrdering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView1 from './NavigationView1';
import { LoginContext } from '../../SharedComponent/LoginContext';
import { Redirect, Switch } from 'react-router';

function Paymentbycash() {
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
        <Container>
   
            <Row>
            <Col xs={3}> 
            <img class=" img-fluid mai " src="/assets/images/404.png" alt=""/>
              </Col>
           
              <div class="col-7 themain">
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView1 onShowCart={showCartHandler} />
            <h2 style={{textAlign: 'center', color: "orange",fontSize: "2vw", fontWeight: 'bold'}}>{data.lang === "vi" ?"Quý khách vui lòng cầm hóa đơn điện tử ra quầy thu ngân để tính tiền":"Please take your e-invoice to the cashier counter for payment"}</h2>
        </CartProvider>  
        </div>
      <div class="col-2 ps-3">  
      <img class=" img-fluid mai" src="/assets/images/404.png" alt=""/>
              </div>
              
            </Row>     
          </Container>)}
          </LoginContext.Consumer>
    );
}
export default Paymentbycash;