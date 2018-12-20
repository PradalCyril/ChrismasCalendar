import React, { Component } from 'react';
import Link from '../url_calendar/index'
import logo from './logo.svg';


class Prespage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayQuestion: false,
            qa: [],
            objectOfTheDay: []
        }
    }
    componentDidMount() {
        console.log("ID Calendrier : ", this.props.match.params.idCalendar)
    }

    componentDidUpdate() {
        console.log("QA :", this.state.qa)
        console.log("object", this.state.objectOfTheDay.question)
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
    handleClick(number) {
        const objectOfTheDay = this.state.qa.filter(data => data.day == number)
        this.setState({
            objectOfTheDay: objectOfTheDay,
            displayQuestion: !this.state.displayQuestion
            
        })

    }
    isTrue(ev) {
        if (ev.target.value == this.state.objectOfTheDay[0].answer) {
            console.log('yes')
        }
    }
    render() {
        
        return (
            <div>
                {this.state.displayQuestion &&
                <div>{this.state.objectOfTheDay[0].question}
                </div>}
                <img src={logo} alt="logo" onClick={() => this.handleClick(2)} />
                <input onChange={(ev) => this.isTrue(ev)} />
            </div>
        )

    }
}

export default Prespage;