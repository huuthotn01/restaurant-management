import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Button.module.css';

const FoodFilterButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return (
    <Link to = '/ordering'>
      <button className={btnClasses} onClick={props.onClick}>
        <span>Menu</span>
      </button>
    </Link>
  );
};

export default FoodFilterButton;
