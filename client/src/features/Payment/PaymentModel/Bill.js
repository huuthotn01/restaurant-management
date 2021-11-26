import { useContext } from 'react';
import Card from './Card';
import BillDetail from './BillDetail';
import CartContext from '../../FoodOrdering/components/Cart/CartController/CartContext';
import classes from './Bill.module.css';
import React  from 'react';
import {  Col, Row} from 'reactstrap';
import DropMenu from '../PaymentController/dropdown2';
import DropPayment from '../PaymentController/dropdown';
import { LoginContext } from '../../SharedComponent/LoginContext';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toLocaleString('vi-VN')} VND`;

  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartContext.items.map((item) => (
        <BillDetail
          key = {item.id}
          name = {item.name}
          amount = {item.amount}
          price = {item.price}
        />
      ))}
    </ul>
  );


  return (
    <LoginContext.Consumer>
      {data => ( 
      <Card>
        {cartItems}
        <div style={{paddingTop: "40px"}}>
        <div style={{ fontWeight: 'bold', fontSize: '2.1vw', textAlign: "left", float: "left"}}> 
        {data.lang === "vi" ?"Thành tiền":"Cost"}
          </div>
          <div style={{ fontWeight: 'bold', color: "orange", fontSize: '2.9vw', textAlign: "right"}}>
          {totalAmount}
        </div>
        </div>
        <Row >
          <Col style={{textAlign: "center"}}>
          <DropPayment /> 
            </Col>
            <Col style={{textAlign: "center"}}>
            <DropMenu />
            </Col>
          </Row>
      </Card>)}
      
      </LoginContext.Consumer>
  );

};

export default Cart;
