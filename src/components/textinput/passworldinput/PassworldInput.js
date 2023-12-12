
import { Component } from 'react';
import './PassworldInput.css'
class PassworldInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isFocus : false
        }
        this.clickIsOnFocus = this.clickIsOnFocus.bind(this);
    }

    clickIsOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }

    render(){
        return (
            <div className='input_passworld_container'>
                <input 
                    type="password" 
                    className="input_passworld_filed" 
                    placeholder={this.state.isFocus? '':' Please input your Password' }
                    onFocus={()=>this.clickIsOnFocus()}
                    onBlur={()=>this.clickIsOnFocus()}
                />
            </div>
        );
    }
}

export default PassworldInput;