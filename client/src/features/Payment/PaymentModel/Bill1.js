import { useContext } from 'react';
import Card from './Card';
import BillDetail from './BillDetail';
import CartContext from '../../FoodOrdering/components/Cart/CartController/CartContext';
import classes from './Bill.module.css';
import React  from 'react';
import random from './Id'
import { LoginContext } from '../../SharedComponent/LoginContext';


const Cart1 = (props) => {
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
  let id = random();

  return (
    <LoginContext.Consumer>
      {data => (
      <Card>
          <span style={{ fontWeight: 'bold', fontSize: '2.1vw'}}> ID:{id}</span>
        {cartItems}
        <div style={{paddingTop: "40px"}}>
        <div style={{ fontWeight: 'bold', fontSize: '2.1vw', textAlign: "left", float: "left"}}> 
        {data.lang === "vi" ?"Thành tiền":"Cost"}
          </div>
          <div style={{ fontWeight: 'bold',color: "orange", fontSize: '2.3vw', textAlign: "right"}}>
          {totalAmount}
        </div>
        </div>
      </Card>)}
      </LoginContext.Consumer>
  );

};

export default Cart1;
