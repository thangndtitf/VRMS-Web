import React, { Component } from "react";

import {UserNameInput , PassworldInput} from '../../components/textinput/index'
import {LoginButton} from '../../components/button/index'
import Clock from '../../components/clock/Clock'
import './LoginView.css'

class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : ' '
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render(){
        const value = this.state.value;
        return(
            <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
              value={this.state.value}
              onChange={this.handleChange} />
            <Clock
              celsius={parseFloat(value)} />
          </fieldset>
        )
    };
  


}

export default LoginView;