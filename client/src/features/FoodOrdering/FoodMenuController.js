import { useState } from 'react';

import NavigationBar from './components/Menu/MenuView/NavigationView';
import Cart from './components/Cart/CartView/Cart';
import CartProvider from './components/Cart/CartController/CartProvider';
import FoodMenu from './components/Menu/MenuView/FoodMenuView';

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
        <FoodMenu />
      </main>
    </CartProvider>
  );
}

export default Food_Ordering;
