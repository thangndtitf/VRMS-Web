import { Component } from "react";

import './TextArenaInput.css'
class TextArenaInput extends Component{
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
        this.props.onChangeTextValue(event.target.value)
    }

    render(){
        const inputValue = this.props.inputValue;
        const inputName = this.props.inputName;
        return (
            
                <input 
                    type="text" 
                    className="text_input"  
                    placeholder={this.state.isFocus ? true : ' Please input your ' + inputName}
                    onFocus={()=> this.clickIsOnFocus()}
                    onBlur={()=> this.clickIsOnFocus()}
                    onChange={this.handleChangeValue}
                    value={inputValue}
                />
        );
    }
}

export default TextArenaInput;