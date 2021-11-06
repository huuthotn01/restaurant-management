import { useContext } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  // gia tong cong
  const totalAmount = `${cartCtx.totalAmount.toFixed(0)} VND`;
  const hasItems = cartCtx.items.length > 0;

  // xoa bot mon an
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  // them mon an
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // mon an trong gio hang
  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
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
        <button className={classes['button--alt']} onClick={props.onClose}>
          Quay lại menu
        </button>
        {hasItems && <button className={classes.button}>Tiến hành thanh toán</button>}
      </div>
    </Modal>
  );
};

export default Cart;
