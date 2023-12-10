import React from 'react'
import './App.css';

import {Acceptbutton} from './components/button/index'
import {UserNameInput , PassworldInput, PhoneInput} from './components/textinput/index'

const App = () => {
  return (
    <div className="App">
      <Acceptbutton className="App_btn" buttonText='Thang'/>
      <Acceptbutton buttonText='Khanh'/>
      <UserNameInput /> <br></br>
      <PassworldInput />
      <PhoneInput/>
    </div>
  );
}

export default App;
