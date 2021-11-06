import React, { Fragment } from 'react';

import { NavbarBrand } from 'reactstrap';
// import { FaCalendar, FaShoppingCart, FaBookOpen, FaTable } from 'react-icons/fa';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import logoImage from '../../assets/brand.png';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <NavbarBrand href="#">
                    <img width="120px" height="41px" src={logoImage} alt="Logo"></img>
                </NavbarBrand>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='mainbanner'/>
            </div>
        </Fragment>
    );
};

export default Header;