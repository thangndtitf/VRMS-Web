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
        this.textChangeHandle = this.textChangeHandle.bind(this);
        this.alertUserName = this.alertUserName.bind(this);
    }
    

    textChangeHandle(event){
        const { name, value } = event.target;
   
        this.setState(prevState =>({
            ...prevState,
            [name]: value
         }))
    }

    alertUserName(event){
        
        alert('A name was submitted: ' + this.state.userNameValues);
        event.preventDefault();
    }

    render(){
        return (
            <div>
                <form className="form_login" onSubmit={this.alertUserName}>
                    <div className="form_login_username_input"  >
                        <UserNameInput name='userNameValues' value='usernamevalue'  onChange={(event) => this.textChangeHandle(event)} />
                    </div>
                    <div className="form_login_password_input">
                        <PassworldInput name='passwordValues' value='passwordvalue' onChange={(event) => this.textChangeHandle(event)}/>
                    </div>
                    <div type="submit" className="form_login_btn">
                        <LoginButton />
                    </div>
                </form>
                <footer className="loginview_footer">
                    <p >© 2023 Your Company. All rights reserved.</p>
                </footer>
            </div>
        )
    }


}

export default LoginView;