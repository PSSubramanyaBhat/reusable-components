import Arrow from './Arrow';
import React from 'react';
import styles from './Arrow.module.css';


export default {
    title: 'Application/Arrow',
    component: Arrow
};

export const Arrow_1 = () => <Arrow direction={'Right'}/>;
export const Arrow_2 = () => <Arrow direction={'Down'}/>;
export const Arrow_3 = () => <Arrow direction={'Left'}/>;
export const Arrow_4 = () => <Arrow direction={'Up'}/>;
