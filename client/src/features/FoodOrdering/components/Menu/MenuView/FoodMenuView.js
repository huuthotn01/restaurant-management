import { Fragment } from 'react';
import Slogan from './Slogan';
import Food from '../FoodMenuModel';

const FoodMenuController = () => {
  return (
    <Fragment>
      <Slogan />
      <br></br>
      <Food />
    </Fragment>
  );
};

export default FoodMenuController;
