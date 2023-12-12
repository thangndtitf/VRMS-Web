import { Component } from 'react';
import './PhoneInput.css';


class PhoneInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isOnChange : false,
            isFocus: false,
        };
        this.clickOnChange = this.clickOnChange.bind(this);
        this.clickOnFocus = this.clickOnFocus.bind(this);
       
    }

    clickOnChange(){
        this.setState(prevState => ({
            isOnChange : !prevState.isOnChange
        }))
    }

    clickOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }



    render(){
        return (
            <div className='phoneinput_container'>
                <input 
                    type='text' 
                    className='phoneinput_filed' 
                    placeholder={this.state.isFocus? ' ' : 'Please input Your phone '} 
                    onFocus={()=>this.clickOnFocus()}
                    onBlur={()=>this.clickOnFocus()}
                    >
                </input>
            </div>
        );
    }
}

export default PhoneInput;