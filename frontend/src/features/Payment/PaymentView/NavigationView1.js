import React, { Fragment } from 'react';

import Cart1 from '../PaymentModel/Bill1'
import classes from './NavigationView.module.css';

const NavigationView1 = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <Cart1/>
            </div>
        </Fragment>
    );
};


export default NavigationView1;