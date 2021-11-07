import classes from './CartItem.module.css';

const CartItem = (props) => {
  // gia tung mon trong gio hang - lam tron den 2 chu so
  const price = `${props.price.toFixed(0)} VND`;
  return (
    <li className={classes['cart-item']}>
      <div>
        {/* ten mon trong gio hang */}
        <h2>{props.name}</h2>
        {/* gia va so luong cua tung mon */}
        <div className={classes.summary}> 
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>{props.amount}</span>
        </div>
      </div>
      {/* them va bot */}
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
