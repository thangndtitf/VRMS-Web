import React, { Component } from "react";

import './acceptbutton.css'

class Acceptbutton extends Component {
    render(){
        return (
            <div className="vrms_acceptbtn">
                <button  type="button" >
                   <span className="vrms_acceptbtn_span">
                        Accept {this.props.buttonText}
                   </span>
                </button>
            </div>
        );
    }
}


export default Acceptbutton;