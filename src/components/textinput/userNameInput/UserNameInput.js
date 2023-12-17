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
    }

    clickIsOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }

    handleInputChange(e){
        const newValue = e.target.value;
        this.setState({
            inputValue : newValue
        })
        this.props.onValueChange(newValue);
    }

    render(){
        return (
            
                <input 
                    type="text" 
                    className="usernamecontainer_input"  
                    value={this.state.inputValue}
                    placeholder={this.state.isFocus ? '' : ' Please input your User Name'}
                    onChange={this.handleInputChange}
                    onFocus={()=> this.clickIsOnFocus()}
                    onBlur={()=> this.clickIsOnFocus()}
                />
            
        );
    }
}

export default UserNameInput;