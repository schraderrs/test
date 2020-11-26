import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { useContext, useState, useEffect} from 'react';
import '../assets/css/chat.css';
import Draggable from 'react-draggable';
import { GlobalContext } from "../GlobalContext";

function Chat(props) {

    const [chatEnabled, setChatEnabled] = useState(false);
    const [chatEnabledClass, setChatEnabledClass] = useState("chat-no-display")
    const [message, setMessage] = useState(null);



    let [messages, setMessages] = useState([]);
    let globalVariables = useContext(GlobalContext);

    // setMessages(globalVariables.state.response)

    const handleChatEnabled = () => {
        setChatEnabled(!chatEnabled);
        if(!chatEnabled) {
            setChatEnabledClass("chat-display");
        }
        else {
            setChatEnabledClass("chat-no-display");
        }
    }

    let handleMessageChange = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
    }

    let handleSendMessage = (event) => {
        console.log(message);
        event.preventDefault();
        console.log('called')
        globalVariables.state.websocket.send(JSON.stringify({
            command: 'addMessage',
            token: localStorage.getItem('token'),
            message: message,
            username: "Jeroen",
        }));
    }
    return (
        <div className="root">
            <div className="button-div">
                <button className={["btn btn-primary chat-button"]} onClick={handleChatEnabled}>Ff chatten</button>
            </div>
            <div className="draggable-div">
                <Draggable>
                    <div className="draggable">
                        <div className={["chat-container " + chatEnabledClass]}>
                            <div className="messages">
                                <strong className={["username"]}>Jeroen</strong>
                                {messages && messages.map(message => <p>{message.author}</p>)}
                            </div>
                            <div class="message">
                                <form onSubmit={handleSendMessage}>    
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <input type="text" value={message} onChange={handleMessageChange} className={["form-control"]} placeholder={"Typ uw bericht"} />
                                        </div>
                                        <div className="col-lg-4">
                                            <button type="submit" className={"btn btn-primary"}>Versturen</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Draggable>
            </div>
        </div>
    )
}

export default withRouter(Chat);