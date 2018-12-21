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
            this.setState({
                classe: "on"
            })
            console.log('yes')
        }
    }
    render() {
        
        return (
            <div>
                <div className="body">
                <img onClick={() => this.handleClick()} src={ButtonPlay} className="button-send" alt="Button Send" />
                {this.state.isVisible ? (
                    <div className="game-backg">
                        <div className="game-container">
                            <img onClick={() => this.handleClick()} src={ButtonClose} className="button-close" alt="Button Close" />
                            <iframe width="560" height="315" src={`https://www.silvergames.com/fr/${this.props.video}connect-4/iframe`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" ></iframe>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
                <div className={this.state.classe}></div>
                {this.state.displayQuestion &&
                <div>{this.state.objectOfTheDay[0].question}
                </div>}
                <img src={logo} alt="logo" onClick={() => this.handleClick(2)} />
                <input onChange={(ev) => this.isTrue(ev)} />
                <input onClick={(ev) =>this.isTrue(ev)}/>
            </div>
        )

    }
}

export default Prespage;