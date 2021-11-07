import { useContext, useEffect, useState } from 'react';

import classes from './FilterButton.module.css';

const FoodFilterButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span>Đồ ăn</span>
    </button>
  );
};

export default FoodFilterButton;
