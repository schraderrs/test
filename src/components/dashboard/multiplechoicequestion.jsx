import React from "react";
import '../../assets/css/dashboardquestions.css';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

function MultipleChoiceQuestion() {
    return (
        <div className="space-top">
            <Form.Control className="space-bottom" size="lg" type="text" placeholder="Typ hier uw vraag.." />
            <Form.Control className="space-bottom" type="text" placeholder="Antwoord optie" />
            <Form.Control className="space-bottom" type="text" placeholder="Antwoord optie" />
            <Form.Control className="space-bottom" type="text" placeholder="Antwoord optie" />
            <Button variant="primary">+ Antwoord</Button>
        </div>        
    )
}

export default MultipleChoiceQuestion;