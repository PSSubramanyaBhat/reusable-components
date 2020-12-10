// import PropTypes from 'prop-types';
import React from 'react';
import cn from "classnames";
import styles from './Arrow.module.css';

const Arrow = ({ dropDownOpen }) => {
    return (
        <div
            className={styles.Arrow}
            onClick={() => {
                dropDownOpen();
            }}
        >
        </div>
    );
};

Arrow.propTypes = {};

export default Arrow;


/*
className={cn(styles.DrawerStyle, {
            [styles.DrawerClosedStyle]: drawerState === false,
          })}
*/