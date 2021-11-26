import { Fragment } from 'react';
import Slogan from './Slogan';
import Food from '../FoodMenuModel';
import Drink from '../DrinkMenuModel';
import { LoginContext } from '../../../../SharedComponent/LoginContext';

import classes from './Menu.module.css';

const Menu = () => {
  return (
    <LoginContext.Consumer>
      {data => (       
      <Fragment>
        <Slogan />
        <div className={classes.category}>
        <p>{data.lang === "vi" ? "Đồ ăn" : "Foods"}</p>
        </div>
        <Food />
        <div className={classes.category}>
        <p>{data.lang === "vi" ? "Thức uống" : "Drinks"}</p>
        </div>
        <Drink />
      </Fragment> )}

    </LoginContext.Consumer>

  );
};

export default Menu;
