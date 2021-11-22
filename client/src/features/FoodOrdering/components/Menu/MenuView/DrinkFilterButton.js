import { useContext, useEffect, useState } from 'react';
import classes from './Button.module.css';
import { Link } from 'react-router-dom';

const DrinkFilterButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return (
    <Link to = '/drink-menu'>
      <button className={btnClasses} onClick={props.onClick}>
        <span>Thức uống</span>
      </button>
    </Link>
  );
};

export default DrinkFilterButton;
