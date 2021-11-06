import Card from '../UI/Card';
import MealItem from './Item/Item';
import classes from './Menu.module.css';
import img1 from './Image/1.jpg';
import img2 from './Image/2.jpg';
import img3 from './Image/3.jpeg';
import img4 from './Image/4.jpg';
import img5 from './Image/5.jpg';
import img11 from './Image/11.jpg';

// import menu from './product_price.json'

const DUMMY_MEALS = [
  {
    id: 1,
    name: "Perrier Water (750ml)",
    price: 3.95,
    image: <img className={classes.itemImage} src={img1} alt='item'/>
  },
  {
    id: 2,
    name: "Bottle Coke",
    price: 2.95,
    image: <img className={classes.itemImage} src={img2} alt='item'/>
  },
  {
    id: 3,
    name: "Lemonade 1.5 ltr",
    price: 2.95,
    image: <img className={classes.itemImage} src={img3} alt='item'/>
  },
  {
    id: 4,
    name: "Diet Coke 1.5 ltr",
    price: 2.95,
    image: <img className={classes.itemImage} src={img4} alt='item'/>
  },
  {
    id: 5,
    name: "Coke 1.5 ltr",
    price: 2.95,
    image: <img className={classes.itemImage} src={img5} alt='item'/>
  },
  {
    id: 11,
    name: "Bottle Diet Coke",
    price: 2.95,
    image: <img className={classes.itemImage} src={img11} alt='item'/>
    // image: img8

  }
];

const Drinks = () => {
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

export default Drinks;
