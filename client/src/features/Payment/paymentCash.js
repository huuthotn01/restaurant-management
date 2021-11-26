import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
import './payment.css'
import Bill from './Bill';
import CartProvider from '../FoodOrdering/components/Cart/CartController/CartProvider';
import { useState } from 'react';
import NavigationView1 from './NavigationView1';

function Paymentbycash() {
    const [cartIsShown, setCartIsShown] = useState(false);
    const showCartHandler = () => {
        setCartIsShown(true);
    };
    const hideCartHandler = () => {
        setCartIsShown(false);
    };
    return (
        <Container>
   
            <Row>
            <Col xs={3}> 
            <img class=" img-fluid mai " src="/assets/images/404.png" alt=""/>
              </Col>
           
              <Col xs={3} >
        <CartProvider>
            {cartIsShown && <Bill onClose={hideCartHandler} />}
            <NavigationView1 onShowCart={showCartHandler} />
            <h2 style={{textAlign: 'center', color: "orange",fontSize: "2vw", fontWeight: 'bold'}}>Quý khách vui lòng cầm hóa đơn điện tử ra quầy thu ngân để tính tiền</h2>
        </CartProvider>  
      </Col>
      <Col xs={3}>  
      <img class=" img-fluid mai " src="/assets/images/404.png" alt=""/>
              </Col>
              
            </Row>     
          </Container>
    );
}
export default Paymentbycash;