import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import '../assets/css/homepage.css';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useContext } from 'react';
import ReactCodeInput from 'react-code-input';
import API from '../apiconnection.js';
import { GlobalContext } from "../GlobalContext";
import Chat from '../components/chat'

export function Home() {
    const [input, setInput] = useState('');
    let globalVariables = useContext(GlobalContext);
    const usehistory = useHistory();

    const props = {
        inputStyle: {
            fontFamily: 'nunito',
            margin: '4px',
            MozAppearance: 'textfield',
            width: '50px',
            borderRadius: '50%',
            fontSize: '20px',
            height: '50px',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #0CC18B',
            textAlign: 'center',
            value: input,
        },
        inputStyleInvalid: {
            fontFamily: 'nunito',
            margin: '4px',
            MozAppearance: 'textfield',
            width: '50px',
            borderRadius: '50%',
            fontSize: '20px',
            height: '50px',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #D86972',
            textAlign: 'center',
            value: input,
        }
    }

    const [style, setStyle] = useState(true);
    const [error, setError] = useState(false);


    // check if code is in an array <- given by database -> push to new page or give false message 
    const CheckIsValid = (event) => {
        event.preventDefault();
        API.get('/api/designstudios/' + input + '/check').then(response => {
            if(response.data.response === false) {
                Error();
            }
            else {
                globalVariables.state.websocket.send(JSON.stringify({
                    command: 'join',
                    content: "Jeroen",
                    token: input,
                }));
                localStorage.setItem('token', input);
                globalVariables.token = input;
                usehistory.push("/personal");
            }
        })
    }

    // set error state on true which will display ShowError div 
    function Error() {
        setError(true);
        setStyle(false);
    }

    // returns a error message div
    function ShowError() {
        return(
            <div>
                <p className = 'errorMessage'>De code is ongeldig, probeer nogmaals.</p>
            </div>
        )
    }

    return (
        <div className={["container-fluid information-page-container"]}>
            <div className="row">
                <div className={["col-lg-6 homepage-info"]}>
                    <div className="info-inner">
                            <div className='col1-container-hp'>
                                <div className='container-hp'>
                                    <div className='container-hp'>
                                    <form onSubmit={CheckIsValid}>
                                        <div className='header-text-hp'>
                                            <p>Welkom bij het <span className='header-span-hp'>online</span> ontwerpatelier!</p>
                                        </div>
                                        <div className='body-text-hp'>
                                            <p>Vul hier uw persoonlijke code in, die is toegestuurd per mail of post</p>
                                        </div>
                                        <div className='input-code-container-hp'>
                                            {error ? <ShowError /> : null}
                                            <ReactCodeInput className='input-tool-hp' isValid={style} type='number' fields={6} {...props} value={input} onChange={setInput} />
                                        </div>
                                        <div className='link-hp'>
                                            <button type="submit" className='button-participate-hp'>Deelnemen</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 <div className={["col-lg-6 background-img"]}>
                 </div>
            </div>
        </div>
    );
}

export default withRouter(Home);