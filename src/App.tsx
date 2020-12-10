import './App.css';
import Arrow from './components/Arrow/Arrow';
import Dropdown from './components/Dropdown/Dropdown';
import React, {useState, useEffect} from 'react';
import logo from './logo.svg';



function App() {
  const [dropDownStatus,setDropDownStatus] = useState(false);
  return (
    <div className="App">
      <Dropdown></Dropdown>
      <Arrow dropDownStatus={dropDownStatus}></Arrow>
    </div>
  );
}

export default App;
