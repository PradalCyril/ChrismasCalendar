import React, { Component } from 'react';
import './index.css';


import Boule1 from './1.png';
import Boule2 from './2.png';
import Boule3 from './3.png';
import Boule4 from './4.png';
import Boule5 from './5.png';
import Boule6 from './6.png';
import Boule7 from './7.png';
import Boule8 from './8.png';
import Boule9 from './9.png';
import Boule10 from './10.png';
import Boule11 from './11.png';
import Boule12 from './12.png';
import Boule13 from './13.png';
import Boule14 from './14.png';
import Boule15 from './15.png';
import Boule16 from './16.png';
import Boule17 from './17.png';
import Boule18 from './18.png';
import Boule19 from './19.png';
import Boule20 from './20.png';
import Boule21 from './21.png';
import Boule22 from './22.png';
import Boule23 from './23.png';
import Boule24 from './24noelbis.png';
import Title from './christmas-trivia.png';

class ScrollHorizontal extends Component {

    handleClick(number) {
        const objectOfTheDay = this.state.qa.filter(data => data.day == number)
        this.setState({
            objectOfTheDay: objectOfTheDay
        })
    }

    render() {
        return (
            <React.Fragment>
                <div id="container">
                    <div id="container1">
                        <div id="title"><img className="title-1" src={Title} alt="title" /></div>
                        <div id="container2">
                            <div className="boules boule1 bouleBleue"><img className="boule" onClick={() => this.handleClick(1)} src={Boule1} alt="boule5"/></div>
                            <div className="boules boule2"><img className="boule" onClick={() => this.handleClick(2)} src={Boule2} alt="boule5" /></div>
                            <div className="boules boule3 bouleRouge"><img className="boule" onClick={() => this.handleClick(3)} src={Boule3} alt="boule5" /></div>
                            <div className="boules boule4"><img className="boule" onClick={() => this.handleClick(4)} src={Boule4} alt="boule4" /></div>
                            <div className="boules boule5"><img className="boule" onClick={() => this.handleClick(5)} src={Boule5} alt="boule5" /></div>
                            <div className="boules boule6 bouleBleue"><img className="boule" onClick={() => this.handleClick(6)} src={Boule6} alt="boule5" /></div>
                            <div className="boules boule7"><img className="boule" onClick={() => this.handleClick(7)} src={Boule7} alt="boule5" /></div>
                            <div className="boules boule8 bouleRouge"><img className="boule" onClick={() => this.handleClick(8)} src={Boule8} alt="boule5" /></div>
                            <div className="boules boule9"><img className="boule" onClick={() => this.handleClick(9)} src={Boule9} alt="boule5" /></div>
                            <div className="boules boule10"><img className="boule" onClick={() => this.handleClick(10)} src={Boule10} alt="boule5" /></div>
                            <div className="boules boule11 bouleBleue"><img className="boule" onClick={() => this.handleClick(11)} src={Boule11} alt="boule5" /></div>
                            <div className="boules boule12"><img className="boule" onClick={() => this.handleClick(12)} src={Boule12} alt="boule5" /></div>
                            <div className="boules boule13 bouleRouge"><img className="boule" onClick={() => this.handleClick(13)} src={Boule13} alt="boule5" /></div>
                            <div className="boules boule14"><img className="boule" onClick={() => this.handleClick(14)} src={Boule14} alt="boule5" /></div>
                            <div className="boules boule15"><img className="boule" onClick={() => this.handleClick(15)} src={Boule15} alt="boule5" /></div>
                            <div className="boules boule16 bouleBleue"><img className="boule" onClick={() => this.handleClick(16)} src={Boule16} alt="boule5" /></div>
                            <div className="boules boule17"><img className="boule" onClick={() => this.handleClick(17)} src={Boule17} alt="boule5" /></div>
                            <div className="boules boule18 bouleRouge"><img className="boule" onClick={() => this.handleClick(18)} src={Boule18} alt="boule5" /></div>
                            <div className="boules boule19"><img className="boule" onClick={() => this.handleClick(19)} src={Boule19} alt="boule5" /></div>
                            <div className="boules boule20"><img className="boule" onClick={() => this.handleClick(20)} src={Boule20} alt="boule5" /></div>
                            <div className="boules boule21 bouleBleue"><img className="boule" onClick={() => this.handleClick(21)} src={Boule21} alt="boule5" /></div>
                            <div className="boules boule22"><img className="boule" onClick={() => this.handleClick(22)} src={Boule22} alt="boule5" /></div>
                            <div className="boules boule23 bouleRouge"><img className="boule" onClick={() => this.handleClick(23)} src={Boule23} alt="boule5" /></div>
                            <div className="boules boule24"><img className="boule" onClick={() => this.handleClick(24)} src={Boule24} alt="boule5" /></div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ScrollHorizontal;