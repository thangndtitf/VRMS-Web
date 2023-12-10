import React from "react";

import './acceptbutton.css'

const Acceptbutton = (props) => {
    return (
        <div className="vrms_acceptbtn">
            <button  type="button" >
               <span className="vrms_acceptbtn_span">
                    Accept {props.buttonText}
               </span>
            </button>
        </div>
    );
}


export default Acceptbutton;