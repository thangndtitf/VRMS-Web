
import { Component } from 'react';
import './PassworldInput.css'
class PassworldInput extends Component{
    render(){
        return (
            <div className='input_passworld_container'>
                <input type="password" className="input_passworld_filed" placeholder="Your password"/>
            </div>
        );
    }
}

export default PassworldInput;