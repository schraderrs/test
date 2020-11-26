import { React, useState } from 'react'
import { Col, Row } from "react-bootstrap";
import '../../assets/css/openquestion.css'
import SkipQuestion from '../popup/skipquestion'

function OpenQuestion(props) {
    const [isValid, setIsValid] = useState(false)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function Submit() {
        if (show) {
            handleClose();
            props.button()
        } else {
            let value = document.getElementById('input-oq').value
        console.log(value)

        value != '' ? props.button() : setIsValid(true)
        }
    }

    

    const AlertMessage = () => {
        let inputField = document.getElementById('input-oq')

        inputField.style.borderColor = 'red';
        return (
            <div>
                <p className='error-message'>Please fill in your opinion</p>
            </div>
        )
    }

    return (
        <Row>
            {show ? <SkipQuestion show = {show} handleClose = {handleClose} submit = {Submit}/> : ''}
            <Col className='SEP-tool'>
                <div className='bg_image-oq'></div>
            </Col>
            <Col className = 'col1-oq'>
                <div className='col1-container-oq'>
                        <h1 className='header1-oq'>
                            {props.question.title}
                        </h1>
                        <p className='text-oq'>{props.question.content}</p>                    
                        {isValid ? <AlertMessage /> : ''}
                        <textarea placeholder='Geef uw mening hier ..' id='input-oq' ></textarea>
                    
                    <div className='bottom'>
                        <button className='submit-oq' onClick={Submit}>Bevestig</button>
                        <button className='skip-mc' onClick={handleShow}>Sla deze vraag over</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default OpenQuestion