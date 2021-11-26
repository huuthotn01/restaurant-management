import { useContext, useEffect, useState } from 'react';

import CartIcon from './CartIcon';
import CartContext from '../CartController/CartContext';
import { LoginContext } from '../../../../SharedComponent/LoginContext';
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
    <LoginContext.Consumer>
      {data => ( 
        <button className={btnClasses} onClick={props.onClick}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>{data.lang === "vi" ? "Giỏ hàng" : "Cart"}</span>
          <span className={classes.badge}>{amountItem}</span>
        </button>
      )}
    </LoginContext.Consumer>

  );
};

export default HeaderCartButton;
