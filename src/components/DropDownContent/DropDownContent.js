import React from 'react';
// import PropTypes from 'prop-types';
import styles from './DropDownContent.module.css';

const months = [
    {
        name: 'January',
        id: 1,
    },
    {
        name: 'February',
        id: 2,
    },
    {
        name: 'March',
        id: 3,
    },
    {
        name: 'April',
        id: 4,
    },
    {
        name: 'May',
        id: 5,
    },
    {
        name: 'June',
        id: 6,
    },
    {
        name: 'July',
        id: 7,
    },
    {
        name: 'August',
        id: 8,
    },
    {
        name: 'September',
        id: 9,
    },
    {
        name: 'October',
        id: 10,
    },
    {
        name: 'November',
        id: 11,
    },
    {
        name: 'December',
        id: 12,
    },

];


const DropDownContent = props => {
    return (
        <div className={styles.DropDownContent}>
        </div>
    );
};


DropDownContent.propTypes = {

};

export default DropDownContent;