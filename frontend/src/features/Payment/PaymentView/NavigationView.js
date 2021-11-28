import React, { Fragment } from 'react';

import Cart from '../PaymentModel/Bill';
import classes from './NavigationView.module.css';

const NavigationView = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <Cart/>
            </div>
        </Fragment>
    );
};


export default NavigationView;