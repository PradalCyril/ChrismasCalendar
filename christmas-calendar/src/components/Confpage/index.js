
import React, { Component } from 'react';
import Link from '../url_calendar/index'

class Confpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueButton:'Ok',
            idCalendar: 0,
            date: 1,
            showTextInfo: 'hidden',
            questionCreate: '',
            answerCreate: '',
            listeQuestionAnswer: []

        }
    }
    addQA() {
        const noUse = this.state.listeQuestionAnswer.map((elem, index) => {
            fetch('http://localhost:3000/api/QA/', {
                method: "POST",
                headers: {
                    'Content-type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(elem)
            })
        }
        )

    }
    componentWillMount() {
        fetch('http://localhost:3000/api/calendar/')
            .then(response => response.json())
            .then(data => {
                if (data.length !== 0) {
                    this.setState({
                        idCalendar: data[data.length - 1].id + 1
                    })
                } else {
                    this.setState({ idCalendar: data.length + 1 })
                }
            })
    }

    handleClick() {
    }
    handleChange(ev, type) {
        this.setState({ [type]: ev.target.value })
    }
    loadToTheState() {
        if (this.state.questionCreate.length !== 0 && this.state.answerCreate.length !== 0 && this.state.date < 24) {
            const newArray = this.state.listeQuestionAnswer.slice();
            newArray.push({ question: this.state.questionCreate, answer: this.state.answerCreate, calendar_id: this.state.idCalendar, day : this.state.date })
            this.setState({
                date: this.state.date + 1,
                answerCreate: '',
                questionCreate: '',
                listeQuestionAnswer: newArray
            })
        } else if (this.state.date >= 24) {
            let css = (this.state.showTextInfo === 'hidden') ? 'show' : 'hidden';
            fetch('http://localhost:3000/api/calendar/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: this.state.idCalendar })
            })
                .then(this.addQA()
                )
            this.setState({
                showTextInfo: css,
                date: 1,
                answerCreate: '',
                questionCreate: '',
                listeQuestionAnswer: [],
                idCalendar: this.state.idCalendar + 1,
                valueButton:'good, copy the share link below'
            })
        }
    }
    render() {


        return (
            <div>
                <ul className="parent_interact">

                    <li className="parent_interact_list">
                        <p>{this.state.date}</p>
                        <input type="text" className="question" onChange={(ev) => this.handleChange(ev, "questionCreate")} placeholder='question' value={this.state.questionCreate} />
                        <input type="text" className="answer" onChange={(ev) => this.handleChange(ev, "answerCreate")} placeholder='answer' value={this.state.answerCreate} />
                        <button onClick={(ev) => this.loadToTheState(ev)}>{this.state.valueButton}</button>
                    </li>
                 
                </ul>
                <Link  idCalendar={this.state.idCalendar} />
            </div>
        )
    }
}

export default Confpage;