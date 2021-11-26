import { useContext } from 'react';

import Modal from '../../Menu/MenuView/Modal';
import CartItem from './CartDetail';
import CartContext from '../CartController/CartContext';
import classes from './Cart.module.css';

import { LoginContext } from '../../../../SharedComponent/LoginContext';

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `${cartContext.totalAmount.toLocaleString('vi-VN')} VND`;
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
    <LoginContext.Consumer>
      {data => ( 

        <Modal onClose={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>{data.lang === "vi" ? "Thành tiền" : "Total amount"}</span>
            <span>{totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>{data.lang === "vi" ? "Quay lại menu" : "Back to menu"}</button>
            {nonemptyCart && <a href='/payment'> <button className={classes.button}>{data.lang === "vi" ? "Tiến hành thanh toán" : "Checkout"}</button></a>}
          </div>
        </Modal>
      )}
    </LoginContext.Consumer>
  );

};

export default Cart;
