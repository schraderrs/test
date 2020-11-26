import React from 'react';
import { useContext, useState} from 'react';
import { GlobalContext } from "../GlobalContext";

function Timer() {
    let globalVariables = useContext(GlobalContext);

    const [timer, setTimer] = useState(null);

    setInterval(() => {
        setTimer(globalVariables.state.timer);
    },1000);

    return timer;
}

export default Timer;