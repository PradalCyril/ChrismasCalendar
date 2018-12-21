import './index.css';
import React, { Component } from 'react';
import Link from '../url_calendar/index'

class Confpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complete: false,
            valueButton: 'Next question',
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
    handleChange(ev, type) {
        this.setState({ [type]: ev.target.value })
    }
    loadToTheState() {
        if (this.state.questionCreate.length !== 0 && this.state.answerCreate.length !== 0 && this.state.date < 4) {
            const newArray = this.state.listeQuestionAnswer.slice();
            newArray.push({ question: this.state.questionCreate, answer: this.state.answerCreate, calendar_id: this.state.idCalendar, day: this.state.date })
            this.setState({
                complete: false,
                date: this.state.date + 1,
                answerCreate: '',
                questionCreate: '',
                listeQuestionAnswer: newArray
            })

        } else if (this.state.date >= 4) {

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
                complete: !this.state.complete,
                showTextInfo: css,
                date: 1,
                answerCreate: '',
                questionCreate: '',
                listeQuestionAnswer: [],
                idCalendar: this.state.idCalendar + 1,
                valueButton: 'good, copy the share link below'
            })
        }
    }
    render() {


        return (
            <div>

                <p className = "welcome1">Welcome to your Christmas Calendar</p>
                
                <p className = "welcome2"> Day by day you’re gonna to suggest puzzles, calculations or questions for your child to allow him to have access to little games. If his answer is wrong he cannot play until the next day.</p>
                <p className = "welcome3">He will discover a new little game everyday if he succeed challenges.</p>

                <p className = "welcome3">After the creation of the calendar, we will give you a link to share it with your child.</p>

                {!this.state.complete &&
                    <ul className="parent_interact">

                        <li className="parent_interact_list">
                            <p className = "pleaseFill">Please fill the form for the <span className = "day"> &emsp;{this.state.date}&emsp;</span> december !</p>
                            <p className = "question_title">Your question / enigma / calculation ...</p>
                            <p><input type="text" className="input_question" onChange={(ev) => this.handleChange(ev, "questionCreate")} placeholder='Example : 6 x 7' value={this.state.questionCreate} /></p>
                            <p className = "answer_title">Enter here the answer...</p>
                            <p><input type="text" className="input_answer" onChange={(ev) => this.handleChange(ev, "answerCreate")} placeholder='Example : 42' value={this.state.answerCreate} /></p>
                            <button className = "buttonOk" onClick={(ev) => this.loadToTheState(ev)}>{this.state.valueButton}</button>
                        </li>

                    </ul>}
                {this.state.complete &&
                    <Link idCalendar={this.state.idCalendar} />}
            </div>
        )
    }
}

export default Confpage;