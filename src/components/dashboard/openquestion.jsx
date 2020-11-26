import React from "react";
import '../../assets/css/dashboardquestions.css';

import Form from 'react-bootstrap/Form'

function OpenQuestion() {       
    
    const Question = function(content) {
        this.content = content;
    }

    let questions = [];
    let value = "fucking getelementbyid werkt niet in react dus wtf nu?"

    questions.push(new Question(value));
    
    return (
        <div className="space-top">            
            <Form.Control size="lg" as="textarea" rows={6} placeholder= "Typ hier de vraag.." />            
        </div>        
    )
}

export default OpenQuestion;