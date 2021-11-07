import { useContext, useEffect, useState } from 'react';
import classes from './FilterButton.module.css';

const DrinkFilterButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>Thức uống</span>
    </button>
  );
};

export default DrinkFilterButton;
