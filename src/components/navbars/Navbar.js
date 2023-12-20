import { Component } from "react";
import {Routes, Route, Link} from 'react-router-dom'

import logo from '../../assets/icons/HomePageLogo.png'; // Thay đường dẫn tới hình ảnh của bạn
import customerLogo from '../../assets/icons/customerlogo.png'

import './Navbar.css'
class Navbar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav className="navbar">
                <div className="logo">
                    <Link to='/home' className="nav-item">
                        <img src={logo} alt="Description of your image" />
                    </Link>
                </div>
                <ul className="nav-list">
                    <li >
                        <Link to='/home' className="nav-item">Home Page</Link>
                    </li>
                    <li >
                        <Link to='/*' className="nav-item">Error Page</Link>
                    </li>
                    <li >
                        <Link to='/loginpage' className="nav-item">Login Page</Link>
                    </li>
                    <li >
                        <Link to='/' className="nav-item">Home Page</Link>
                    </li>
                    <li >
                        <Link to='/information' className="nav-item"><img src={customerLogo} alt="Description of your image" /></Link>
                    </li>
                </ul>

            </nav>
            
        )
    }

}

export default Navbar;