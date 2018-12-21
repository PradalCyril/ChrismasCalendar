import React, { Component } from 'react';
import ScrollHorizontal from '../ScrollHorizontal/index';
import './index.css';

import Boule1 from '../ScrollHorizontal/1.png';
import Boule2 from '../ScrollHorizontal/2.png';
import Boule3 from '../ScrollHorizontal/3.png';
import Boule4 from '../ScrollHorizontal/4.png';
import Boule5 from '../ScrollHorizontal/5.png';
import Boule6 from '../ScrollHorizontal/6.png';
import Boule7 from '../ScrollHorizontal/7.png';
import Boule8 from '../ScrollHorizontal/8.png';
import Boule9 from '../ScrollHorizontal/9.png';
import Boule10 from '../ScrollHorizontal/10.png';
import Boule11 from '../ScrollHorizontal/11.png';
import Boule12 from '../ScrollHorizontal/12.png';
import Boule13 from '../ScrollHorizontal/13.png';
import Boule14 from '../ScrollHorizontal/14.png';
import Boule15 from '../ScrollHorizontal/15.png';
import Boule16 from '../ScrollHorizontal/16.png';
import Boule17 from '../ScrollHorizontal/17.png';
import Boule18 from '../ScrollHorizontal/18.png';
import Boule19 from '../ScrollHorizontal/19.png';
import Boule20 from '../ScrollHorizontal/20.png';
import Boule21 from '../ScrollHorizontal/21.png';
import Boule22 from '../ScrollHorizontal/22.png';
import Boule23 from '../ScrollHorizontal/23.png';
import Boule24 from '../ScrollHorizontal/24noelbis.png';
import Title from '../ScrollHorizontal/christmas-trivia.png';


class Prespage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayQuestion: false,
            qa: [],
            objectOfTheDay: [],
            games: [],
        }
    }

    
    componentDidMount() {
        console.log("ID Calendrier : ", this.props.match.params.idCalendar)
    }
    componentDidUpdate() {
        console.log("QA :", this.state.qa)
        console.log("object", this.state.objectOfTheDay.question)
        console.log("game : ", this.state.games)
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
        console.log("ici", number)
        let addgames = ['http://slither.io/', 'https://www.silvergames.com/fr/connect-4/iframe','http://www.silvergames.com/en/agario/iframe','https://www.silvergames.com/fr/happy-glass/iframe']
        const objectOfTheDay = this.state.qa.filter(data => data.day == number)
        this.setState({
            objectOfTheDay: objectOfTheDay,
            displayQuestion: !this.state.displayQuestion,
            games: addgames[Math.floor(Math.random() * addgames.length)],

        })
    }
    isTrue() {
        if (this.answer.value === this.state.objectOfTheDay[0].answer) {
            console.log('yes');
            window.open(`${this.state.games}`)

        } else {
            window.open('https://media.giphy.com/media/EriPNV1whwKac/giphy.gif', 'sharer', 'toolbar=0,status=0,width=300,height=300')

        }
    }

    render() {

        

        return (
            <React.Fragment>

                {this.state.displayQuestion &&
                    <div className="question-fild">

                        <div className="question-fild-box">

                            <div>
                                {this.state.objectOfTheDay[0].question}
                            </div>
                        </div>
                        <div className="answer-fild-box">
                            <div className="answer-is">The answer is :</div>
                            <input className="input-Prespage" ref={ (el) => this.answer = el} />
                            <button className = "btn-click" onClick={() => this.isTrue()}>Check result !</button>
                        </div>
                    </div>

                }

                <div id="container">
                    <div id="container1">
                        <div id="title"><img className="title-1" src={Title} alt="title" /></div>
                        <div id="container2">
                            <div className="boules boule1 bouleBleue"><img className="boule" onClick={() => this.handleClick(1)} src={Boule1} alt="boule5" /></div>
                            <div className="boules boule2 bouleJaune"><img className="boule" onClick={() => this.handleClick(2)} src={Boule2} alt="boule5" /></div>
                            <div className="boules boule3 bouleRouge"><img className="boule" onClick={() => this.handleClick(3)} src={Boule3} alt="boule5" /></div>
                            <div className="boules boule4 bouleVerte"><img className="boule" onClick={() => this.handleClick(4)} src={Boule4} alt="boule4" /></div>
                            <div className="boules boule5 bouleViolette"><img className="boule" onClick={() => this.handleClick(5)} src={Boule5} alt="boule5" /></div>
                            <div className="boules boule6 bouleBleue"><img className="boule" onClick={() => this.handleClick(6)} src={Boule6} alt="boule5" /></div>
                            <div className="boules boule7 bouleJaune"><img className="boule" onClick={() => this.handleClick(7)} src={Boule7} alt="boule5" /></div>
                            <div className="boules boule8 bouleRouge"><img className="boule" onClick={() => this.handleClick(8)} src={Boule8} alt="boule5" /></div>
                            <div className="boules boule9 bouleVerte"><img className="boule" onClick={() => this.handleClick(9)} src={Boule9} alt="boule5" /></div>
                            <div className="boules boule10 bouleViolette"><img className="boule" onClick={() => this.handleClick(10)} src={Boule10} alt="boule5" /></div>
                            <div className="boules boule11 bouleBleue"><img className="boule" onClick={() => this.handleClick(11)} src={Boule11} alt="boule5" /></div>
                            <div className="boules boule12 bouleJaune"><img className="boule" onClick={() => this.handleClick(12)} src={Boule12} alt="boule5" /></div>
                            <div className="boules boule13 bouleRouge"><img className="boule" onClick={() => this.handleClick(13)} src={Boule13} alt="boule5" /></div>
                            <div className="boules boule14 bouleVerte"><img className="boule" onClick={() => this.handleClick(14)} src={Boule14} alt="boule5" /></div>
                            <div className="boules boule15 bouleViolette"><img className="boule" onClick={() => this.handleClick(15)} src={Boule15} alt="boule5" /></div>
                            <div className="boules boule16 bouleBleue"><img className="boule" onClick={() => this.handleClick(16)} src={Boule16} alt="boule5" /></div>
                            <div className="boules boule17 bouleJaune"><img className="boule" onClick={() => this.handleClick(17)} src={Boule17} alt="boule5" /></div>
                            <div className="boules boule18 bouleRouge"><img className="boule" onClick={() => this.handleClick(18)} src={Boule18} alt="boule5" /></div>
                            <div className="boules boule19 bouleVerte"><img className="boule" onClick={() => this.handleClick(19)} src={Boule19} alt="boule5" /></div>
                            <div className="boules boule20 bouleViolette"><img className="boule" onClick={() => this.handleClick(20)} src={Boule20} alt="boule5" /></div>
                            <div className="boules boule21 bouleBleue"><img className="boule" onClick={() => this.handleClick(21)} src={Boule21} alt="boule5" /></div>
                            <div className="boules boule22 bouleJaune"><img className="boule" onClick={() => this.handleClick(22)} src={Boule22} alt="boule5" /></div>
                            <div className="boules boule23 bouleRouge"><img className="boule" onClick={() => this.handleClick(23)} src={Boule23} alt="boule5" /></div>
                            <div className="boules boule24"><img className="boule" onClick={() => this.handleClick(24)} src={Boule24} alt="boule5" /></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Prespage;