import './App.css';
import Arrow from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';


// let direction = 'Right';
function App() {
  const [dropDownStatus, setDropDownStatus] = useState(false);
  const [direction, setDirection] = useState('Right');


  useEffect(() => {
    if (dropDownStatus === false) {
      setDirection('Right');
    } else {
      setDirection('Down');
    }
  },[dropDownStatus]);

  function dropDownOpen() {
    setDropDownStatus(!dropDownStatus);
    console.log("Enna sonnre nimmajji... ", dropDownStatus);
  }

  return (
    <div className="App">
      <Dropdown dropDownOpen={dropDownOpen} dropDownStatus={dropDownStatus}></Dropdown>
      <Arrow dropDownOpen={dropDownOpen} dropDownStatus={dropDownStatus} direction={direction}></Arrow>
    </div>
  );
}

export default App;
