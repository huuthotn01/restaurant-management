import React, { Fragment } from 'react';

import CartButton from '../../Cart/CartView/CartButton';
import banner from '../../../assets/banner.jpg';
import classes from './NavigationView.module.css';
import MenuButton from './MenuButton';
import DrinkFilterButton from './DrinkFilterButton';
import FoodFilterButton from './FoodFilterButton';
import { ReactComponent as CloseMenu } from '../../../assets/x.svg';
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';

import { Link } from 'react-router-dom';
import { useState  } from 'react';


const AdsBanner = (props) => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <Fragment>
            <div className={classes.header}>
                <MenuButton />
                <FoodFilterButton />
                <DrinkFilterButton />
                <CartButton onClick={props.onShowCart} />
                {/* <CartButton /> */}
                {/* <ul className = { click ? " nav-options active" : "nav-options"}>
                    <li className = "option" onClick={closeMobileMenu}>
                        <MenuButton />
                    </li>
                    <li className = "option" onClick={closeMobileMenu}>
                        <FoodFilterButton />
                    </li>
                    <li className = "option" onClick={closeMobileMenu}>
                        <DrinkFilterButton />
                    </li>
                    <li className = "option mobile-option" onClick={closeMobileMenu}>
                        <CartButton onClick={props.onShowCart} />
                    </li>
                </ul>
                <ul className="Cart">
                    <li className="CartButton" onClick={closeMobileMenu}>
                        <CartButton onClick={props.onShowCart} />
                    </li>
                </ul>
                <div className="mobile-menu" onClick={handleClick}>
                    {click ? (
                        <CloseMenu className="menu-icon" />
                        ) : (
                        <MenuIcon className="menu-icon" />
                    )}
                </div> */}
            </div>
            <div className={classes['main-image']}>
                <img src={banner} alt='mainbanner'/>
            </div>
        </Fragment>
    );
};


export default AdsBanner;