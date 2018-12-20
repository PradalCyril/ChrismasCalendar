import React from 'react';
import Link from '../url_calendar/index'
class Confpage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            idCalendar : 0,
        }
    }

    render(){
        return(
            <div>
          <Link  idCalendar={this.state.idCalendar} />
                
            </div>
        )
    }
}

export default Confpage;