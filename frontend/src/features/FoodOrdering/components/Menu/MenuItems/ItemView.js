import { useContext } from 'react';

import ItemForm from './ItemFormController';
import classes from './ItemView.module.css';
import CartContext from '../../Cart/CartController/CartContext';

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${props.price.toLocaleString('vi-VN')} VND`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      image: props.image
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.frame}>{props.image}</div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default Item;
