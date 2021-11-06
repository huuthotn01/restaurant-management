import { useContext } from 'react';

import ItemForm from './ItemForm';
import classes from './Item.module.css';
import CartContext from '../../../store/cart-context';

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

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
        <br></br>
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
