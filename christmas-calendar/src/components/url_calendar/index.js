import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './index.css';




class Link extends Component {



    render(){
        return(
            <div class = "txt">
                    <p>
                        Congratulation ! Your calendar has been successfully created !
                    </p>
                    <p>
                        Feel free to share it with your friends !
                    </p>
                    <p>    
                        <span className="link"><NavLink class = "a" to={`Prespage/${this.props.idCalendar}`}>CLick Here to see your Calendar !</NavLink></span>
                    </p>

            </div>
        )
    }
}



export default Link;

