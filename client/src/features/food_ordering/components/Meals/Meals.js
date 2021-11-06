import { Fragment } from 'react';

import Banner from './Banner';
import Food from './Food';
import Drink from './Drink';
import Header from '../Layout/Header';

import classes from './Menu.module.css';

const Meals = () => {
  return (
    <Fragment>
      <Banner />
      <div className={classes.category}><p>Đồ ăn</p></div>
      <Food />
      <div className={classes.category}><p>Thức uống</p></div>
      <Drink />
    </Fragment>
  );
};

export default Meals;
