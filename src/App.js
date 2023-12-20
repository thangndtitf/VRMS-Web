import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'

import './App.css';
import {HomeView, LoginView,NotFoundsPage, InfoViewPage} from './views/index'
import Navbar from './components/navbars/Navbar';
const App = () => {
  return (
    <div>
        
          <Routes>
            <Route path="/home" element={<HomeView/>}/>
            <Route path="/*" element={<NotFoundsPage errorCode='404' errorMessage='Not found page'/>}/>
            <Route path="/loginpage" element={<LoginView/>}/>
            <Route path="/information" element={<InfoViewPage/>}/>
          </Routes>
    </div>

  );
}

export default App;
{/* <h2>Error {this.props.errorCode}</h2>
<p>{this.props.errorMessage}</p> */}

//information