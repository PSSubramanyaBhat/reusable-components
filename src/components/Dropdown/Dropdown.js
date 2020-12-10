import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import cn from "classnames";
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

const Dropdown = ({ dropDownStatus }) => {
    const [selectedMonth, setSelectedMonth] = useState('Select a month');
    const [dropDown, setDropDown] = useState(dropDownStatus);

    // useEffect(() => {
    //     setDropDown(!dropDown);
    //     // console.log("YUVRAJ SINGH...", dropDown);
    // },[]);

    return (

        <div className={styles.Dropdown}>


            <div className={styles.DropdownSelected}>
                {/* {months[0].name} */}
                {selectedMonth}
            </div>
            {dropDownStatus
            /* {dropDown */  //try this later...
                ? <div
                    className={styles.DropDownContainer}
                // className={cn(styles.DropDownContainerOff, {
                //     [styles.DropDownContainer]: dropDownStatus,
                // })}
                >
                    {months.map((monthName, id) => {
                        return (
                            <button
                                className={styles.MonthList}
                                key={id}
                                onClick={() => {
                                    setSelectedMonth(monthName.name);
                                    // setDropDown(false);
                                }}
                            >
                                {monthName.name} </button>
                        );
                    })}
                </div>
                : ''}
        </div>
    );
};


Dropdown.propTypes = {

};

export default Dropdown;