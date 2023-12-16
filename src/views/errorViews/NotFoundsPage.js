import { Component } from "react";

import './NotFound.css'
class NotFoundsPage extends Component{

    // constructor(props){
    //     super(props);
        
    // }

    render(){
        return (
            <div className="error-page">
              <div className="error-container">
                <div className="error-icon">&#9888;</div>
                <div className="error-message">
                  <h2>Error {this.props.errorCode}</h2>
                  <p>{this.props.errorMessage}</p>
                </div>
              </div>
            </div>
        );
    };
}

export default NotFoundsPage;

