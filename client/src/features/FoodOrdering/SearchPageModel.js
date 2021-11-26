import MealItem from './components/Menu/MenuItems/ItemView';
import classes from './components/Menu/MenuView/Menu.module.css';
import itemList from './components/Menu/TempList';
import { useState } from 'react';
import SearchBar from './components/Menu/SearchBar/CardSearchBar';
import { LoginContext } from '../SharedComponent/LoginContext';

const Foods = () => {
    const getFilteredItems = (query, items) => {
      if (!query) {
        return items;
      }
      return items.filter((song) => song.name.toLowerCase().includes(query));
    };
  
    const [query, setQuery] = useState(itemList);
    const filteredItems = getFilteredItems(query, itemList);
  
    return (
      <LoginContext.Consumer>
      {data => ( 

      <section className={classes.meals}>
        <div className={classes.searchBar}>
          <label>{data.lang === "vi" ? "Tìm kiếm" : "Search"}</label>
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
        </div>
        <div className={classes.text}>
          <p>{data.lang === "vi" ? "Kết quả tìm kiếm" : "Result"}</p>
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
        </SearchBar>
      </section>

)}


</LoginContext.Consumer>

    );
};

export default Foods;