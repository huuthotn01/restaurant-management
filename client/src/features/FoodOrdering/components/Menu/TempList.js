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

  },
  {
    id: 6,
    category: "Món phụ",
    name: "Green Salad",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/6.jpg' alt='item'/>
  },
  {
    id: 7,
    category: "Cơm",
    name: "Plain Rice",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/7.jpg' alt='item'/>
  },
  {
    id: 8,
    category: "Bánh mì",
    name: "Garlic Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/8.jpg' alt='item'/>
  },
  {
    id: 9,
    category: "Bánh mì",
    name: "Onion Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/9.jpg' alt='item'/>
  },
  {
    id: 10,
    category: "Bánh mì",
    name: "Paratha",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/10.jpg' alt='item'/>
  },
  {
    id: 12,
    category: "Bánh mì",
    name: "Kulcha Naan",
    price: 2.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/12.jpg' alt='item'/>
  },
  {
    id: 13,
    category: "Món phụ",
    name: "Dhansak Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/13.jpg' alt='item'/>
  },
  {
    id: 14,
    category: "Món phụ",
    name: "Onion Bhajee",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/14.jpg' alt='item'/>
  },
  {
    id: 15,
    category: "Cơm",
    name: "Lemon Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/15.jpg' alt='item'/>
  },
  {
    id: 16,
    category: "Món phụ",
    name: "French Fries",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/16.jpg' alt='item'/>
  },
  {
    id: 17,
    category: "Cơm",
    name: "Garlic Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/17.jpg' alt='item'/>
  },
  {
    id: 18,
    category: "Cơm",
    name: "Onion Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/18.jpg' alt='item'/>
  },
  {
    id: 19,
    category: "Cơm",
    name: "Special Fried Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/19.jpg' alt='item'/>
  },
  {
    id: 20,
    category: "Món phụ",
    name: "Meat Samosa",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/20.jpg' alt='item'/>
  },
  {
    id: 21,
    category: "Cơm",
    name: "Mushroom Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/21.jpg' alt='item'/>
  },
  {
    id: 22,
    category: "Món phụ",
    name: "Korma Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/22.jpg' alt='item'/>
  },
  {
    id: 23,
    category: "Cơm",
    name: "Vegetable Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/23.jpg' alt='item'/>
  },
  {
    id: 24,
    category: "Cơm",
    name: "Egg Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/24.jpg' alt='item'/>
  },
  {
    id: 25,
    category: "Món phụ",
    name: "Curry Sauce",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/25.jpg' alt='item'/>
  },
  {
    id: 26,
    category: "Bánh mì",
    name: "Egg Paratha",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/26.jpg' alt='item'/>
  },
  {    
    id: 27,
    category: "Cơm",
    name: "Keema Rice",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/27.jpg' alt='item'/>
  },
  {
    id: 28,
    category: "Bánh mì",
    name: "Stuffed Paratha",
    price: 3.95,
    image: <img className={classes.itemImage} src='assets/images/Menu_Image/28.jpg' alt='item'/>
  }
];

export default DUMMY_MEALS;