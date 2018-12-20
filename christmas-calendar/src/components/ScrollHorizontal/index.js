import React, { Component } from 'react';
import './index.css';

import Boule1 from './bleuflocon.png';
import Boule2 from './jaune.png';
import Boule3 from './rougeflocon.png';
import Boule4 from './vert.png';
import Boule5 from './violetflocon.png';

class ScrollHorizontal extends Component {
    render() {
        return (
            <div id="container">
                <div id="container1">
                    <div id="container2">
                        <div className="boules boule11"><img className="boule" src={Boule1} alt="boule5"/></div>
                        <div className="boules boule12"><img className="boule" src={Boule2} alt="boule5"/></div>
                        <div className="boules boule13"><img className="boule" src={Boule3} alt="boule5"/></div>
                        <div className="boules boule4"><img className="boule" src={Boule4} alt="boule4"/></div>
                        <div className="boules boule5"><img className="boule" src={Boule5} alt="boule5"/></div>
                        <div className="boules boule6"><img className="boule" src={Boule1} alt="boule5"/></div>
                        <div className="boules boule7"><img className="boule" src={Boule2} alt="boule5"/></div>
                        <div className="boules boule8"><img className="boule" src={Boule3} alt="boule5"/></div>
                        <div className="boules boule9"><img className="boule" src={Boule4} alt="boule5"/></div>
                        <div className="boules boule10"><img className="boule" src={Boule5} alt="boule5"/></div>
                        <div className="boules boule11"><img className="boule" src={Boule1} alt="boule5"/></div>
                        <div className="boules boule12"><img className="boule" src={Boule2} alt="boule5"/></div>
                        <div className="boules boule13"><img className="boule" src={Boule3} alt="boule5"/></div>
                        <div className="boules boule14"><img className="boule" src={Boule4} alt="boule5"/></div>
                        <div className="boules boule15"><img className="boule" src={Boule5} alt="boule5"/></div>
                        <div className="boules boule16"><img className="boule" src={Boule1} alt="boule5"/></div>
                        <div className="boules boule17"><img className="boule" src={Boule2} alt="boule5"/></div>
                        <div className="boules boule18"><img className="boule" src={Boule3} alt="boule5"/></div>
                        <div className="boules boule19"><img className="boule" src={Boule4} alt="boule5"/></div>
                        <div className="boules boule20"><img className="boule" src={Boule5} alt="boule5"/></div>
                        <div className="boules boule21"><img className="boule" src={Boule1} alt="boule5"/></div>
                        <div className="boules boule22"><img className="boule" src={Boule2} alt="boule5"/></div>
                        <div className="boules boule23"><img className="boule" src={Boule3} alt="boule5"/></div>
                        <div className="boules boule24"><img className="boule" src={Boule4} alt="boule5"/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ScrollHorizontal;