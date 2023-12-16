import React, { Component } from "react";

import './acceptbutton.css'

class Acceptbutton extends Component {

    constructor(props){
        super(props);
        this.state = {isToggle :true};
        this.handleClick = this.handleClick.bind(this); 
    }
    
    handleClick (){
        this.setState(prevState =>({
            isToggle : !prevState.isToggle,
        }))
    }


// Đây là cách handle event trong component. Ngoài ra có thể truyền 1 Id vào việc handle cho việc thêm hoặc xóa dữ liệu : 
//(e) => this.deleteRow(id, e)
    render(){
        return (
            <div className="vrms_acceptbtn">
                <button  onClick={() => this.handleClick()} >  
                   <span className="vrms_acceptbtn_span">
                        Login is  {this.props.buttonText}is :{this.state.isToggle ? 'On' : 'Off'} 
                   </span>
                </button>
            </div>
        );
    }
}


export default Acceptbutton;