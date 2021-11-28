import React, { Fragment } from 'react';
import CartButton from '../../Cart/CartView/CartButton';
import classes from './NavigationView.module.css';
import MenuSidebar from '../Sidebar/Navbar';

const AdsBanner = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <MenuSidebar />
                <CartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src='assets/images/banner.jpg' alt='mainbanner'/>
            </div>
        </Fragment>
    );
};


export default AdsBanner;