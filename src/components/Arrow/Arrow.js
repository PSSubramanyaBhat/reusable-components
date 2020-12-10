// import PropTypes from 'prop-types';
import React from 'react';
import cn from "classnames";
import styles from './Arrow.module.css';

// export enum Direction {
//     Idle = "idle",
//     Loading = "loading",
//     Resolved = "resolved",
//     Error = "error",
//   }

const Arrow = ({ dropDownOpen, dropDownStatus, direction }) => {
    return (
        <div
            // className={styles.ArrowRight}

            // className={cn(styles.ArrowRight, {
            //     [styles.ArrowBottom]: dropDownStatus,
            // })}   /** PERFECTLY WORKING CODE */

            className={cn(styles.ArrowRight, {
                [styles.ArrowBottom]: direction === 'Down',
                [styles.ArrowLeft]: direction === 'Left',
                [styles.ArrowTop]: direction === 'Up',
            })}


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