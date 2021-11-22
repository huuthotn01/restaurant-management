import React, {Component} from 'react';
import { Container , Col, Row} from 'reactstrap';
// import Example from './dropdown';
import './payment.css'
// import CartItem from '../FoodOrdering/components/Cart/CartItem';
// import Cart from '../FoodOrdering/components/Cart/Cart';
// import Card from '../FoodOrdering/components/UI/Card';
let total = 1000000;
class PaymentMomo extends Component {
    render(){
        return (
            <Container>
            <Row>
            <Col xs={3} > 
            <img class="img-fluid " src="/assets/images/404.png" alt=""/>
              </Col>
              <Col xs={6}>
            <h2 style={{marginLeft: '155px', fontWeight: 'bold'}}>Mời bạn quét mã QR </h2>
            <img style={{marginLeft: '160px'}}width="300px" height="300px" src={`https://momosv3.apimienphi.com/api/QRCode?phone=0971083236&amount=${total}& note=${total.toLocaleString('vi-VN')}đ`}></img>

      </Col>
      <Col xs={3}>  
      <img class="img-fluid " src="/assets/images/404.png" alt=""/>
              </Col>
            </Row>
          </Container>
            
        );
    }
}

export default PaymentMomo;