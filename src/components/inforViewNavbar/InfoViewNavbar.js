import { Component } from "react";

import './InfoViewNavbar.css'
import customerLogo from '../../assets/icons/customerlogo.png'
class InfoViewNavbar extends Component{
    render() {
        return (
          <div className="vertical-navbar">
            <div className="logo-container">
              <img src={customerLogo} alt="Logo" className="logo" />
            </div>
            <nav>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
            <div className="search-container">
              <input type="text" placeholder="Search..." />
              <button type="submit"><i className="fa fa-search"></i></button>
            </div>
          </div>
        );
      }
}

export default InfoViewNavbar;