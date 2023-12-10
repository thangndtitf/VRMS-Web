import { Component } from 'react';
import './PhoneInput.css';


class PhoneInput extends Component{
    render(){
        return (
            <div className='phoneinput_container'>
                <input type='text' className='phoneinput_filed' placeholder='Your phone Number'></input>
            </div>
        );
    }
}

export default PhoneInput;