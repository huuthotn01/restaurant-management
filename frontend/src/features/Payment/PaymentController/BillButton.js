import { useContext, useEffect, useState } from 'react';

import CartContext from '../food_ordering/components/Cart/CartController/CartContext';

import classes from '../food_ordering/components/Cart/CartView/CartButton.module.css';

const BillButton = (props) => {
  
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
      <span>Hóa đơn</span>
      <span className={classes.badge}>{amountItem}</span>
    </button>
  );
};

export default BillButton;
