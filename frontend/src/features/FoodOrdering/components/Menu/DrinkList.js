import classes from './MenuView/Menu.module.css';


const DUMMY_MEALS = [
  {
    id: 1,
    category: "Nước suối",
    name: "Perrier Water",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/1.jpg' alt='item'/>
  },
  {
    id: 2,
    category: "Coca",
    name: "Bottle Coke",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/2.jpg' alt='item'/>
  },
  {
    id: 3,
    category: "Khác",
    name: "Lemonade",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/3.jpeg' alt='item'/>
  },
  {
    id: 4,
    category: "Coca",
    name: "Diet Coke",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/4.jpg' alt='item'/>
  },
  {
    id: 5,
    category: "Coca",
    name: "Coca",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/5.jpg' alt='item'/>
  },
  {
    id: 11,
    category: "Coca",
    name: "Bottle Diet Coke",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/11.jpg' alt='item'/>

  }
];

export default DUMMY_MEALS;