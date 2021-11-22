import Card from './MenuView/Card';
import MealItem from './MenuItems/ItemView';
import classes from './MenuView/Menu.module.css';
import img1 from '../../assets/Menu_Image/1.jpg';
import img2 from '../../assets/Menu_Image/2.jpg';
import img3 from '../../assets/Menu_Image/3.jpeg';
import img4 from '../../assets/Menu_Image/4.jpg';
import img5 from '../../assets/Menu_Image/5.jpg';
import img11 from '../../assets/Menu_Image/11.jpg';

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
  const drinkList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      price={meal.price*23000}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{drinkList}</ul>
      </Card>
    </section>
  );
};

export default Drinks;
