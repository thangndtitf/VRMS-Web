import React, { Component } from "react";

import './UserNameInput.css'

class UserNameInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            isFocus : false,
            inputValue:''
           
        }
        this.clickIsOnFocus = this.clickIsOnFocus.bind(this);
        this.handleChangeValue = this.handleChangeValue.bind(this);
    }

    clickIsOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }

    handleChangeValue(event){
        this.props.onChangeUserName(event.target.value)
    }

    render(){
        const userName = this.props.userName;
        return (
            
                <input 
                    type="text" 
                    className="usernamecontainer_input"  
                    value={this.state.inputValue}
                    placeholder={this.state.isFocus ? '' : ' Please input your User Name'}
                    onChange={this.handleInputChange}
                    onFocus={()=> this.clickIsOnFocus()}
                    onBlur={()=> this.clickIsOnFocus()}
                    onChange={this.handleChangeValue}
                    value={userName}
                />
            
        );
    }
}

export default UserNameInput;