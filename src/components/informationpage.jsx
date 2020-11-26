import React from 'react';
import '../assets/css/informationpage.css';
import Tool from '../assets/img/tool.png';
import { NavLink } from "react-router-dom";

import { useContext, useState} from 'react';
import { GlobalContext } from "../GlobalContext";
import Timer from '../scripts/timer';
import { FaClock } from "react-icons/fa";
import Chat from './chat';



function InformationFunction() {
    let globalVariables = useContext(GlobalContext);

    return (
        <div className={["container-fluid information-page-container"]}>
            <div className="row">
                <div className={["col-lg-6 background-img"]}></div>
                <div className={["col-lg-6 info"]}>
                    <div className="info-inner">
                        <div className="row">
                            <div className="col-lg-12">
                            <p><FaClock className="clock-icon"/> <Timer /></p>
                            <h1 class="head">Het <span>project</span> ...</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <p>
                                <b>Wat zijn wij van plan?</b>
                                <br />
                                Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen deze toch vaak lezen. Zelfs als men weet dat het om een faketekst gaat, lezen ze toch door.
                            </p> 
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                            <p>
                                <b>Hoeveel energie willen we opwekken?</b>
                                <br />
                                Dit is een faketekst. Alles wat hier staat is slechts om een indruk te geven van het grafische effect van tekst op deze plek. Wat u hier leest is een voorbeeldtekst. Deze wordt later vervangen door de uiteindelijke tekst, die nu nog niet bekend is.
                            </p> 
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <NavLink to='./explanation'><button class="button" id="button-right">Volgende</button></NavLink>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <div className={["chat"]}>
                                    <Chat />
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default InformationFunction