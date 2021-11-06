import Card from '../UI/Card';
import MealItem from './Item/Item';
import classes from './Menu.module.css';

import img6 from './Image/6.jpg';
import img7 from './Image/7.jpg';
import img8 from './Image/8.jpg';
import img9 from './Image/9.jpg';
import img10 from './Image/10.jpg';
import img12 from './Image/12.jpg';
import img13 from './Image/13.jpg';
import img14 from './Image/14.jpg';
import img15 from './Image/15.jpg';
import img16 from './Image/16.jpg';
import img17 from './Image/17.jpg';
import img18 from './Image/18.jpg';
import img19 from './Image/19.jpg';
import img20 from './Image/20.jpg';
import img21 from './Image/21.jpg';
import img22 from './Image/22.jpg';
import img23 from './Image/23.jpg';
import img24 from './Image/24.jpg';
import img25 from './Image/25.jpg';
import img26 from './Image/26.jpg';
import img27 from './Image/27.jpg';
import img28 from './Image/28.jpg';


// import menu from './product_price.json'

const DUMMY_MEALS = [
  {
    id: 6,
    name: "Green Salad",
    price: 2.95,
    image: <img className={classes.itemImage} src={img6} alt='item'/>
  },
  {
    id: 7,
    name: "Plain Rice",
    price: 2.95,
    image: <img className={classes.itemImage} src={img7} alt='item'/>
  },
  {
    id: 8,
    name: "Garlic Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src={img8} alt='item'/>
  },
  {
    id: 9,
    name: "Onion Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src={img9} alt='item'/>
  },
  {
    id: 10,
    name: "Paratha",
    price: 2.95,
    image: <img className={classes.itemImage} src={img10} alt='item'/>
  },
  {
    id: 12,
    name: "Kulcha Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src={img12} alt='item'/>
  },
  {
    id: 13,
    name: "Dhansak Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src={img13} alt='item'/>
  },
  {
    id: 14,
    name: "Onion Bhajee",
    price: 3.95,
    image: <img className={classes.itemImage} src={img14} alt='item'/>
  },
  {
    id: 15,
    name: "Lemon Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img15} alt='item'/>
  },
  {
    id: 16,
    name: "French Fries",
    price: 3.95,
    image: <img className={classes.itemImage} src={img16} alt='item'/>
  },
  {
    id: 17,
    name: "Garlic Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img17} alt='item'/>
  },
  {
    id: 18,
    name: "Onion Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img18} alt='item'/>
  },
  {
    id: 19,
    name: "Special Fried Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img19} alt='item'/>
  },
  {
    id: 20,
    name: "Meat Samosa",
    price: 3.95,
    image: <img className={classes.itemImage} src={img20} alt='item'/>
  },
  {
    id: 21,
    name: "Mushroom Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img21} alt='item'/>
  },
  {
    id: 22,
    name: "Korma Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src={img22} alt='item'/>
  },
  {
    id: 23,
    name: "Vegetable Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img23} alt='item'/>
  },
  {
    id: 24,
    name: "Egg Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img24} alt='item'/>
  },
  {
    id: 25,
    name: "Curry Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src={img25} alt='item'/>
  },
  {
    id: 26,
    name: "Egg Paratha",
    price: 3.95,
    image: <img className={classes.itemImage} src={img26} alt='item'/>
  },
  {    
    id: 27,
    name: "Keema Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src={img27} alt='item'/>
  },
  {
    id: 28,
    name: "Stuffed Paratha",
    price: 3.95,
    image: <img className={classes.itemImage} src={img28} alt='item'/>
  }
];

const Foods = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Foods;
