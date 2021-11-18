import React, { Fragment } from 'react';

import Bill from './Bill';
import classes from './NavigationView.module.css';

const NavigationView = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <Bill/>
            </div>
        </Fragment>
    );
};


export default NavigationView;