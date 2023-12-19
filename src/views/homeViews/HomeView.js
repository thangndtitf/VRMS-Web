import { Component } from "react";

import Navbar from "../../components/navbars/Navbar";
class HomeView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Navbar/>
                <h1>Home</h1>
            </div>
        )
    }
}

export default HomeView;