import React, { Component } from 'react';
import Link from '../url_calendar/index'
import logo from './logo.svg';


class Prespage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            qa: [],
            objectOfTheDay: [],

        }
    }

    componentDidMount(){
        console.log("ID Calendrier : ",this.props.match.params.idCalendar)
    }

componentDidUpdate(){
    console.log("QA :", this.state.qa)
}
    componentWillMount() {
        fetch(`http://localhost:3000/api/QA?id=${this.props.match.params.idCalendar}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    qa: data,
                })
            }
            )
    }


    handleClick(number){
        const objectOfTheDay = this.state.qa.filter(data => data.day == number) 
        this.setState({
            objectOfTheDay: objectOfTheDay
        })

    }

    render() {
          
            
            
        const question = this.state.qa.map((elem, index) => 
             <li key={index} >{elem.question}</li>
          )
        return(
            <div>
                <ul>
                    {question}
                </ul>

                <img src={logo} alt="logo"  onClick={() => this.handleClick(2)}/>
               


            </div>
        )
        
    }
}

export default Prespage;