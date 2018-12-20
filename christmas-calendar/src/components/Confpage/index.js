import React, { Component } from 'react';

class Confpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 1,
            showTextInfo: 'hidden',
            questionCreate: '',
            answerCreate: '',
            listeQuestionAnswer: []

        }
    }
    componentWillMount(){
        fetch('http://localhost:3000/api/calendar/')
        .then(response=>response.json())
        .then(data=>{console.log("coucou : ",data)})
    }
    handleClick() {
        let css = (this.state.showTextInfo === 'hidden') ? 'show' : 'hidden';
        this.setState({ showTextInfo: css });
        fetch('http://localhost:3000/api/QA', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.listeQuestionAnswer)
          })
          .then(response=>response.json())
          .then(data=>{console.log("coucou",data)})
    }
    handleChange(ev, type) {
        this.setState({ [type]: ev.target.value })
    }
    loadToTheState() {
        if (this.state.questionCreate.length !== 0 && this.state.answerCreate.length !== 0 && this.state.date <=24) {
            const newArray = this.state.listeQuestionAnswer.slice();
            newArray.push({ question: this.state.questionCreate, answer: this.state.answerCreate })
            this.setState({
                date: this.state.date+1,
                answerCreate: '',
                questionCreate: '',
                listeQuestionAnswer: newArray
            })
        }
    }
    createCalendar(){
        fetch('http://localhost:3000/api/calendar', {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(1)
          })
          .then(response=>response.json())
          .then(data=>{console.log("coucou",data)})
    }
    render() {


        return (
            <div>
                <button onClick={(ev)=>this.createCalendar(ev)}>Create a New Calendar</button>
                <ul className="parent_interact">

                    <li className="parent_interact_list">
                        <p>{this.state.date}</p>
                        <input type="text" className="question" onChange={(ev) => this.handleChange(ev, "questionCreate")} placeholder='question 1' value={this.state.questionCreate} />
                        <input type="text" className="answer" onChange={(ev) => this.handleChange(ev, "answerCreate")} placeholder='answer 1' value={this.state.answerCreate} />
                        <button onClick={(ev) => this.loadToTheState(ev)}>Ok</button>
                    </li>
                </ul>
                <h3 className="h3_warning">Warning : please check if your answers are correctly writed</h3>
                <button onClick={(ev) => this.handleClick(ev)}>Next</button>
            </div>
        )
    }
}

export default Confpage;