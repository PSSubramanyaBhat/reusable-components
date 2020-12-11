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
    /*let dir = null;
    if (direction === 'Right') {
        dir = 'styles.rightSide';
    } else if (direction === 'Down') {
        dir = 'styles.downSide';
    } else if (direction === 'Left') {
        dir = 'styles.leftSide';
    } else if (direction === 'Up') {
        dir = 'styles.upSide';
    }*/  //TRY FIXING THIS LOGIC LATER...

    return (
        <div
            className={cn(styles.ArrowRight, {
                [styles.ArrowBottom]: direction === 'Down',
                [styles.ArrowLeft]: direction === 'Left',
                [styles.ArrowTop]: direction === 'Up',
            })}  //METHOD 1... PERFECTLY WORKING CODE...

            // className={`${styles.Arrow} ${dir}`}//TRY FIXING THIS LOGIC LATER...


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