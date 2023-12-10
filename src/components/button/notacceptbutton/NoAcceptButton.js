import { Component } from "react";

class NoAcceptButton extends Component {
    render(){
        return (
            <div className="NoAcceptBtn_container">
                <button className="NoAcceptBtn_container_btn">
                    <span className="NoAcceptBtn_container_btn_text">
                        Cancel
                    </span>
                </button>
            </div>
        )
    }
}