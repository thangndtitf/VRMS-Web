
import { Component } from 'react';
import './PassworldInput.css'
class PassworldInput extends Component{

    constructor(props){
        super(props);
        this.state = {
            isFocus : false
        }
        this.clickIsOnFocus = this.clickIsOnFocus.bind(this);
        this.handleChangePasswordInput = this.handleChangePasswordInput.bind(this);

    }

    clickIsOnFocus(){
        this.setState(prevState => ({
            isFocus : !prevState.isFocus
        }))
    }

    handleChangePasswordInput(event){
        this.props.onChangePassword(event.target.value);
    }

    render(){
        const password =this.props.password;
        return (
            <div className='input_passworld_container'>
                <input 
                    type="password" 
                    className="input_passworld_filed" 
                    placeholder={this.state.isFocus? '':' Please input your Password' }
                    onFocus={()=>this.clickIsOnFocus()}
                    onBlur={()=>this.clickIsOnFocus()}
                    onChange={this.handleChangePasswordInput}
                    value={password}
                />
            </div>
        );
    }
}

export default PassworldInput;