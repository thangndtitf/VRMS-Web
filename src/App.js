import React from 'react'
import './App.css';

import {Acceptbutton} from './components/button/index'
import {UserNameInput , PassworldInput} from './components/textinput/index'

const App = () => {
  return (
    <div className="App">
      <Acceptbutton className="App_btn" buttonText='Thang'/>
      <Acceptbutton buttonText='Khanh'/>
      <UserNameInput />
      <PassworldInput />
    </div>
  );
}

export default App;
