import React from 'react'
import './App.css';

import {Acceptbutton, LoginButton} from './components/button/index'
import {UserNameInput , PassworldInput, PhoneInput} from './components/textinput/index'
import LoginView from './views/loginViews/LoginVIews';

const App = () => {
  return (
    <div className="App">
      <Acceptbutton className="App_btn" buttonText='Thang'/>
      <Acceptbutton buttonText='Khanh'/>
      <UserNameInput /> <br></br>
      <PassworldInput />
      <PhoneInput/>

      <LoginButton/>
      <LoginView />
    </div>
  );
}

export default App;
