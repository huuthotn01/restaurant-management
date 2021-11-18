import { Fragment } from 'react';
import Slogan from './Slogan';
import Drink from '../DrinkMenuModel';

const DrinkMenuController = () => {
  return (
    <Fragment>
      <Slogan />
      <br></br>
      <Drink />
    </Fragment>
  );
};

export default DrinkMenuController;
