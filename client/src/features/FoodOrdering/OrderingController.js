import { useState } from 'react';
import React from 'react';
import NavigationBar from './components/Menu/MenuView/NavigationView';
import Menu from './components/Menu/MenuView/MainPageView';
import Cart from './components/Cart/CartView/Cart';
import CartProvider from './components/Cart/CartController/CartProvider';

function Food_Ordering() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <NavigationBar onShowCart={showCartHandler} />
      <main>
        <Menu />
      </main>
    </CartProvider>
  );
}

export default Food_Ordering;
