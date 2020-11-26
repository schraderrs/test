import React from 'react';
import '../assets/css/explanation.css';
import Tool from '../assets/img/tool.png';
import {NavLink} from "react-router-dom"
import Timer from '../scripts/timer';
import { FaClock } from "react-icons/fa";


function ExplanationFunction() {
    return (
        <div id="container">
            <div id="tool-container-ep">
                <div id="tool" style={{
                    backgroundImage: 'url('+Tool+')',
                    backgroundSize: "cover",
                    height: "100vh",
                }}>            
                </div>
            </div>            
            <div id="explanation-container">
                <div id="explanation">
                <p><FaClock className="clock-icon"/> <Timer /></p>
                <h1 className="head">Hoe gaat dit online <span>ontwerpatelier</span> eruit zien?</h1>
                    <p className="text">
                    Met behulp van dit online ontwerpatelier willen wij u als bewoner graag betrekken bij de projecten die er liggen. In het ontwerpatelier gaat u zelf aan de slag met het ontwerpen van uw woonplaats. Samen met de andere deelnemers gaat u in discussie over de mogelijke ideeën. Tijdens het ontwerpen heeft u de mogelijkheid om met elkaar te communiceren via een chat.<br></br><br></br>
                    Met behulp van dit online ontwerpatelier willen we u als bewoner graag betrekken bij de projecten die er liggen. In het ontwerpatelier gaat u zelf aan de slag met het ontwerpen van uw woonplaats. Samen met de andere deelnemers gaat u in discussie over de mogelijke ideeën. Tijdens het ontwerpen heeft u de mogelijkheid om met elkaar te communiceren via een chat.
                    Met behulp van dit online ontwerpatelier willen we u als bewoner graag betrekken bij de projecten die er liggen. In het ontwerpatelier gaat u zelf aan de slag met het ontwerpen van uw woonplaats. Samen met de andere deelnemers gaat u in discussie over de mogelijke ideeën. Tijdens het ontwerpen heeft u de mogelijkheid om met elkaar te communiceren via een chat.
                    </p>
                    <NavLink to='./questiontest'><button class="button" id="button-right">Volgende</button></NavLink>            
                </div>
            </div>            
        </div>
    )
}

export default ExplanationFunction