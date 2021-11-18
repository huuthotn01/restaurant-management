import { useContext, useEffect, useState } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../CartController/CartContext';

import classes from './CartButton.module.css';

const HeaderCartButton = (props) => {
  
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const amountItem = items.reduce((currentAmount, item) => {
    return currentAmount + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Giỏ hàng</span>
      <span className={classes.badge}>{amountItem}</span>
    </button>
  );
};

export default HeaderCartButton;
