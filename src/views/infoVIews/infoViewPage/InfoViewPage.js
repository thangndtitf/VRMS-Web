import { Component } from "react";

import InfoViewNavbar from '../inforViewNavbar/InfoViewNavbar'
import  Navbar from '../../../components/navbars/Navbar'
import {TextArenaInput} from '../../../components/textinput/index'
import './infoViewPage.css'

class InfoViewPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            userNameValue : ''
        }
        this.onChangeInputText = this.onChangeInputText.bind(this);
    }

    onChangeInputText(userName){
        this.setState({
            userNameValue : userName
        })
    }
    render(){
        const userName = this.state.userNameValue;
        return(
            <div>
                <Navbar/>
                <div className="InfoViewPage">
                    <InfoViewNavbar/>
                    <label>
                        <span>User Name</span>
                        <TextArenaInput inputValue={userName} onChangeTextValue= {this.onChangeInputText} 
                        inputName = 'User Name'/>
                        
                    </label>
               
 
                </div>
            

            </div>
        )
    }
}

export default InfoViewPage;