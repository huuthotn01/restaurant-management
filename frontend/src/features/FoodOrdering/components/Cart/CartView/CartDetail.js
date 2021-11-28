import classes from './CartDetail.module.css';

const CartItem = (props) => {
  const price = `${props.price.toLocaleString('vi-VN')} VND`;
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}> 
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
