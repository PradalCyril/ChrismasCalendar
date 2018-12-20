import React, { Component } from 'react';
import './index.css';

import Boule1 from './Sans titre-4.png';
import Boule2 from './jaune.png';
import Boule3 from './Sans titre-1.png';
import Boule4 from './vert.png';
import Boule5 from './violetflocon.png';
import Boule6 from './24noelbis.png'

class ScrollHorizontal extends Component {
    handleClick(number){
        console.log(number)
    }
    render() {
        return (
            <div id="container">
                <div id="container1">
                    <div id="container2">
                        <div className="boules boule1 bouleBleue"><img className="boule" onClick={() => this.handleClick(1)} src={Boule1} alt="boule5"/></div>
                        <div className="boules boule2"><img className="boule" onClick={() => this.handleClick(2)}src={Boule2} alt="boule5"/></div>
                        <div className="boules boule3 bouleRouge"><img className="boule" onClick={() => this.handleClick(3)}src={Boule3} alt="boule5"/></div>
                        <div className="boules boule4"><img className="boule" onClick={() => this.handleClick(4)} src={Boule4} alt="boule4"/></div>
                        <div className="boules boule5"><img className="boule" onClick={() => this.handleClick(5)} src={Boule5} alt="boule5"/></div>
                        <div className="boules boule6 bouleBleue"><img className="boule" onClick={() => this.handleClick(6)} src={Boule1} alt="boule5"/></div>
                        <div className="boules boule7"><img className="boule" onClick={() => this.handleClick(7)} src={Boule2} alt="boule5"/></div>
                        <div className="boules boule8 bouleRouge"><img className="boule" onClick={() => this.handleClick(8)} src={Boule3} alt="boule5"/></div>
                        <div className="boules boule9"><img className="boule" onClick={() => this.handleClick(9)} src={Boule4} alt="boule5"/></div>
                        <div className="boules boule10"><img className="boule" onClick={() => this.handleClick(10)} src={Boule5} alt="boule5"/></div>
                        <div className="boules boule11 bouleBleue"><img className="boule" onClick={() => this.handleClick(11)} src={Boule1} alt="boule5"/></div>
                        <div className="boules boule12"><img className="boule" onClick={() => this.handleClick(12)} src={Boule2} alt="boule5"/></div>
                        <div className="boules boule13 bouleRouge"><img className="boule" onClick={() => this.handleClick(13)} src={Boule3} alt="boule5"/></div>
                        <div className="boules boule14"><img className="boule" onClick={() => this.handleClick(14)} src={Boule4} alt="boule5"/></div>
                        <div className="boules boule15"><img className="boule" onClick={() => this.handleClick(15)} src={Boule5} alt="boule5"/></div>
                        <div className="boules boule16 bouleBleue"><img className="boule" onClick={() => this.handleClick(16)} src={Boule1} alt="boule5"/></div>
                        <div className="boules boule17"><img className="boule" onClick={() => this.handleClick(17)} src={Boule2} alt="boule5"/></div>
                        <div className="boules boule18 bouleRouge"><img className="boule" onClick={() => this.handleClick(18)} src={Boule3} alt="boule5"/></div>
                        <div className="boules boule19"><img className="boule" onClick={() => this.handleClick(19)} src={Boule4} alt="boule5"/></div>
                        <div className="boules boule20"><img className="boule" onClick={() => this.handleClick(20)} src={Boule5} alt="boule5"/></div>
                        <div className="boules boule21 bouleBleue"><img className="boule" onClick={() => this.handleClick(21)} src={Boule1} alt="boule5"/></div>
                        <div className="boules boule22"><img className="boule" onClick={() => this.handleClick(22)} src={Boule2} alt="boule5"/></div>
                        <div className="boules boule23 bouleRouge"><img className="boule" onClick={() => this.handleClick(23)} src={Boule3} alt="boule5"/></div>
                        <div className="boules boule24"><img className="boule" onClick={() => this.handleClick(24)} src={Boule6} alt="boule5"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollHorizontal;