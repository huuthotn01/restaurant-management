import { useState } from 'react';

import DrinkMenu from './components/Menu/MenuView/DrinkMenuView';
import NavigationBar from './components/Menu/MenuView/NavigationView';
import Cart from './components/Cart/CartView/Cart';
import CartProvider from './components/Cart/CartController/CartProvider';
import { LoginContext } from '../SharedComponent/LoginContext';
import { Redirect, Switch } from 'react-router';

function Food_Ordering() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <LoginContext.Consumer>
    {data => data.role === "2" ? (
      <Switch>
        <Redirect to='/manage' />
      </Switch>
    ) : (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <main>
        <DrinkMenu />
      </main>
    </CartProvider>
    )}
    
    </LoginContext.Consumer>
  );
}

export default Food_Ordering;
