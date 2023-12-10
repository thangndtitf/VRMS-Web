import React, { Component } from "react";

import './UserNameInput.css'

class UserNameInput extends Component {
    render(){
        return (
            <div className="usernamecontainer" >
                <input type="text" className="usernamecontainer_input"  placeholder="User Name " />
            </div>
        );
    }
}

export default UserNameInput;