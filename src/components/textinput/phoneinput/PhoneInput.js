import { Component } from 'react';
import './PhoneInput.css';


class PhoneInput extends Component{
    render(){
        return (
            <div>
                <input type='text' className='phoneinput_filed' placeholder='Your phone Number'></input>
            </div>
        );
    }
}

export default PhoneInput;