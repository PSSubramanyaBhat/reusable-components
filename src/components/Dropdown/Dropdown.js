import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

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

const Dropdown = (props) => {
    const [selectedMonth, setSelectedMonth] = useState('Januray');
    return (

        <div className={styles.Dropdown}>


            <div className={styles.DropdownSelected}>
                {months[0].name}
            </div>
            <div className={styles.DropDownContainer}>
                {months.map((monthName, id) => {
                    return (
                        <button className={styles.MonthList} key={id}>{monthName.name} </button>
                    );
                })}
            </div>
        </div>
    );
};


Dropdown.propTypes = {

};

export default Dropdown;