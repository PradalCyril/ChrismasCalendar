import React, { Component } from 'react';





class Link extends Component {



    render(){
        return(
            <div>
                    <p>
                        Congratulation ! Your calendar has been successfully created !
                        Feel free to share it with your friends !
                        Your link : <span className = "link"> http://localhost:3000/calendar/{this.state.idCalendar} </span>
                    </p>
            </div>
        )
    }
}

export default Link;






