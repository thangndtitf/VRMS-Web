import React, { Component } from "react";

import './UserNameInput.css'

class UserNameInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            isFocus : false
        }
        this.clickIsOnFocus = this.clickIsOnFocus.bind(this);
    }

    clickIsOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }

    render(){
        return (
            <div className="usernamecontainer" >
                <input 
                    type="text" 
                    className="usernamecontainer_input"  
                    placeholder={this.state.isFocus ? '' : ' Please input your User Name'}
                    onFocus={()=> this.clickIsOnFocus()}
                    onBlur={()=> this.clickIsOnFocus()}
                />
            </div>
        );
    }
}

export default UserNameInput;