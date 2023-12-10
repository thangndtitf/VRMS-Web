import React from "react";

import './UserNameInput.css'

const UserNameInput = () => {
    return (
        <div className="usernamecontainer" >
            <input type="text" className="usernamecontainer_input"  placeholder="User Name " />
        </div>
    );
}

export default UserNameInput;