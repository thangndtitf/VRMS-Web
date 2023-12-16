import React, { Component } from "react";

import './LoginButton.css'
class LoginButton extends Component{

    constructor(props){
        super(props);
        this.state = {isLogin : false};
        this.onClickEvt = this.onClickEvt.bind(this);
    }

    onClickEvt(){
        this.setState(prevState => ({
            isLogin : !prevState.isLogin
        }))
    }

    render(){
        return (
            <div >
                <button className="btn_login">
                    <span className="btn_login_span">
                        Login
                    </span>
                </button>
            </div>
        )
    }

}

export default LoginButton;