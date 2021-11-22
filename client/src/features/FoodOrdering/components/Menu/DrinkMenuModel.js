import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import { useState } from 'react';
import DUMMY_MEALS from './DrinkList';

const Drinks = () => {

  const [state, setState] = useState(DUMMY_MEALS);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(DUMMY_MEALS);
    }
    else if (word === 'Nước suối') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Nước suối');
      setState(filtered);
    }
    else if (word === 'Coca') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Coca');
      setState(filtered);
    }
    else if (word === 'Khác') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Khác');
      setState(filtered);
    }
  }

  const drinkList = state.map((meal) => (
    <MealItem
      key={meal.id}
      category={meal.category}
      id={meal.id}
      name={meal.name}
      price={meal.price*23000}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <div className={classes.menuButton}>
        <button className={classes.singleButton} value="All" onClick={handleBtns}>
          Tất cả
        </button>
        <button className={classes.singleButton} value="Nước suối" onClick={handleBtns}>
          Nước suối
        </button>
        <button className={classes.singleButton} value="Coca" onClick={handleBtns}>
          Coca
        </button>
        <button className={classes.singleButton} value="Khác" onClick={handleBtns}>
          Khác
        </button>
      </div>

      <Card>
        <ul>{drinkList}</ul>
      </Card>
    </section>
  );
};

export default Drinks;
