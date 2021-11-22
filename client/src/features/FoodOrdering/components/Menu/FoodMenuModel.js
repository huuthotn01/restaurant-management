import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import DUMMY_MEALS from './FoodList';
import { useState } from 'react';
import SearchBar from './SearchBar/CardSearchBar';

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
    <section className={classes.meals}>

      <div className={classes.menuButton}>
        <button className={classes.singleButton} value="All" onClick={handleBtns}>
          Tất cả
          {/* <span><img className={classes.categoryImage} src={all} alt='bread' /></span> */}
        </button>
        <button className={classes.singleButton} value="Cơm" onClick={handleBtns}>
          Cơm
          {/* <img className={classes.categoryImage} src={rice} alt='rice' /> */}
        </button>
        <button className={classes.singleButton} value="Bánh mì" onClick={handleBtns}>
          Bánh mì
          {/* <span><img className={classes.categoryImage} src={bread} alt='bread' /></span> */}
        </button>
        <button className={classes.singleButton} value="Món phụ" onClick={handleBtns}>
          Món phụ
          {/* <span><img className={classes.categoryImage} src={salad} alt='bread' /></span> */}
        </button>
      </div>

      {/* <div className={classes.searchBar}>
        <label>Search</label>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
      </div>
      
      <SearchBar>
        {filteredItems.map((value) => (
          <ul key={value.name}>     
            <MealItem
              key={value.id}
              category={value.category}
              id={value.id}
              name={value.name}
              price={value.price*23000}
              image={value.image}
            /> 
          </ul>
        ))}
      </SearchBar> */}

      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Foods;
