import React from 'react'
import './App.css';

import {Acceptbutton, LoginButton} from './components/button/index'
import {UserNameInput , PassworldInput, PhoneInput} from './components/textinput/index'
import Clock from './components/clock/Clock'
import NotFoundsPage from './views/errorViews/NotFoundsPage'
import LoginView from './views/loginViews/LoginVIews'

const App = () => {
  return (
    <div className="App">
      <Acceptbutton className="App_btn" buttonText='Thang'/>
      <Acceptbutton buttonText='Khanh'/>
      <UserNameInput /> <br></br>
      <PassworldInput />
      <PhoneInput/>
      <Clock />
      <LoginButton/>
      <NotFoundsPage errorCode='404' errorMessage='Not Found' />
      <LoginView />
    </div>
  );
}

export default App;
