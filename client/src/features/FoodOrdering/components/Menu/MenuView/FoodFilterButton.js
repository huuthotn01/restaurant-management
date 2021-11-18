import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const FoodFilterButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return (
    <Link to = '/food-menu'>
      <button className={btnClasses} onClick={props.onClick}>
        <span>Đồ ăn</span>
      </button>
    </Link>
  );
};

export default FoodFilterButton;
