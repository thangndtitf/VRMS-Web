import React from 'react'
import './App.css';

import {Acceptbutton, LoginButton} from './components/button/index'
import {UserNameInput , PassworldInput, PhoneInput} from './components/textinput/index'
import {LoginView} from './views/index'

const App = () => {
  return (
    <div>
      <LoginView className = 'loginView'/>
      <footer className="loginview_footer">
        <p >© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>

  );
}

export default App;
