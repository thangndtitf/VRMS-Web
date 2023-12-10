import React from 'react'
import './App.css';

import {Acceptbutton} from './components/button/index'

const App = () => {
  return (
    <div className="App">
      <Acceptbutton className="App_btn" buttonText='Thang'/>
      <Acceptbutton buttonText='Khanh'/>
    </div>
  );
}

export default App;
