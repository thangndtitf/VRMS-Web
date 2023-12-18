import React, { Component } from "react";

import {UserNameInput , PassworldInput} from '../../components/textinput/index'
import {LoginButton} from '../../components/button/index'
import './LoginView.css'


class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {
            userNameValues : '' ,
            passwordValues : '',
 
        };
        this.alertUserName = this.alertUserName.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    
    handleChangeUserName(userName){
        this.setState({
            userNameValues: userName
        })
    }

    handleChangePassword(password){
        this.setState({
            passwordValues: password
        })
    }



    alertUserName(event){
        alert('A name was submitted: ' + this.state.userNameValues + ' password is : ' + this.state.passwordValues);
        event.preventDefault();
    }

    render(){
        const userName = this.state.userNameValues;
        const password = this.state.passwordValues;
        return (
            <div className="form_login_container">
                <h1>
                    LOGIN FORM 
                </h1>
                <form className="form_login" onSubmit={this.alertUserName}>
                    <div className = 'form_login_username_input'>
                        <UserNameInput userName = {userName} onChangeUserName={this.handleChangeUserName} /> 
                    </div>
                    <div className = 'form_login_password_input'>
                        <PassworldInput password = {password} onChangePassword= {this.handleChangePassword} />
                    </div>
                    <div className='form_login_btn'>
                        <LoginButton />
                    </div>
                </form>
              
            </div>
        )
    }
}

export default LoginView;