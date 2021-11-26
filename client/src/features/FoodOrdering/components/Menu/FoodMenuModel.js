import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import DUMMY_MEALS from './FoodList';
import { useState } from 'react';
// import SearchBar from './SearchBar/CardSearchBar';
import { LoginContext } from '../../../SharedComponent/LoginContext';

const Foods = () => {
  const [state, setState] = useState(DUMMY_MEALS);

  const handleBtns = (e) => {
    let word = e.target.value;

    if (word === 'All') {
      setState(DUMMY_MEALS);
    }
    else if (word === 'Cơm') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Cơm');
      setState(filtered);
    }
    else if (word === 'Bánh mì') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Bánh mì');
      setState(filtered);
    }
    else if (word === 'Món phụ') {
      const filtered = DUMMY_MEALS.filter(item=>item.category==='Món phụ');
      setState(filtered);
    }
  }


  // const { name } = DUMMY_MEALS;
  // const { items } = name;

  // const filteredItems = getFilteredItems(query, DUMMY_MEALS);

  const mealsList = state.map((meal) => (
    <MealItem
      key={meal.id}
      category={meal.category}
      id={meal.id}
      name={meal.name}
      price={meal.price*23000}
      image={meal.image}
    />
  ));

  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((song) => song.name.toLowerCase().includes(query));
  };

  const [query, setQuery] = useState(DUMMY_MEALS);
  const filteredItems = getFilteredItems(query, DUMMY_MEALS);

  return (
    <LoginContext.Consumer>
      {data => ( 
        <section className={classes.meals}>
          <div className={classes.menuButton}>
            <button className={classes.singleButton} value="All" onClick={handleBtns}>
            {data.lang === "vi" ? "Tất cả" : "All"}
              {/* <span><img className={classes.categoryImage} src={all} alt='bread' /></span> */}
            </button>
            <button className={classes.singleButton} value="Cơm" onClick={handleBtns}>
            {data.lang === "vi" ? "Cơm" : "Rice"}
              {/* <img className={classes.categoryImage} src={rice} alt='rice' /> */}
            </button>
            <button className={classes.singleButton} value="Bánh mì" onClick={handleBtns}>
            {data.lang === "vi" ? "Bánh mì" : "Naan"}
              {/* <span><img className={classes.categoryImage} src={bread} alt='bread' /></span> */}
            </button>
            <button className={classes.singleButton} value="Món phụ" onClick={handleBtns}>
            {data.lang === "vi" ? "Món phụ" : "Side dish"}
              {/* <span><img className={classes.categoryImage} src={salad} alt='bread' /></span> */}
            </button>
          </div>

          <Card>
            <ul>{mealsList}</ul>
          </Card>
        </section> 
      )}


    </LoginContext.Consumer>
  );
};


export default Foods;
