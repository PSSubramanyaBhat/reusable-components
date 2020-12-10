import './App.css';
import Arrow from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';



function App() {
  const [dropDownStatus, setDropDownStatus] = useState(false);

  function dropDownOpen() {
    setDropDownStatus(!dropDownStatus);
    console.log("Enna sonnre nimmajji... ",dropDownStatus);
  }

  return (
    <div className="App">
      <Dropdown dropDownStatus={dropDownStatus}></Dropdown>
      <Arrow dropDownOpen={dropDownOpen}></Arrow>
    </div>
  );
}

export default App;
