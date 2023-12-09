import React from "react";

import './acceptbutton.css'

const Acceptbutton = (props) => {
    return (
        <div className="vrms_acceptbtn">
            <button  type="button" >
                Accept {props.buttonText}
            </button>
        </div>
    );
}


export default Acceptbutton;