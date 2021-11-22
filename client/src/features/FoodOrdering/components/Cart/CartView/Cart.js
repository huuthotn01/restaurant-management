import { useContext, useState, useEffect } from 'react';

import Modal from '../../Menu/MenuView/Modal';
import CartItem from './CartDetail';
import CartContext from '../CartController/CartContext';
import classes from './Cart.module.css';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toFixed(0)} VND`;
  const nonemptyCart = cartContext.items.length > 0;

  const cartItemRemove = (id) => {
    cartContext.removeItem(id);
  };

  const cartItemAdd = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className = {classes['cart-items']}>
      {cartContext.items.map((item) => (
        <CartItem
          key = {item.id}
          name = {item.name}
          amount = {item.amount}
          price = {item.price}
          onRemove = {cartItemRemove.bind(null, item.id)}
          onAdd = {cartItemAdd.bind(null, item)}
        />
      ))}
    </ul>
  );


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Thành tiền</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Quay lại menu</button>
        {nonemptyCart && <a href='/payment'> <button className={classes.button}>Tiến hành thanh toán</button></a>}
      </div>
    </Modal>
  );

};

export default Cart;
