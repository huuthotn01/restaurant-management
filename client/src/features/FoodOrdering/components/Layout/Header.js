import React, { Fragment } from 'react';
// import { FaCalendar, FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import DrinkFilterButton from '../Meals/DrinkFilterButton';
import FoodFilterButton from '../Meals/FoodFilterButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <FoodFilterButton onClick={props.onShowCart} />
                <DrinkFilterButton onClick={props.onShowCart} />
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='mainbanner'/>
            </div>
        </Fragment>
    );
};


export default Header;