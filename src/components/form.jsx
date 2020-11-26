import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import '../assets/css/form.css';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import MultipleChoiceQuestion from './questions/multiplechoice.jsx'
import OpenQuestion from './questions/openquestion.jsx'

// DUMMY DATA 
const Question = function (title, subtitle, type, content, answers, img) {
    this.title = title;
    this.subtitle = subtitle; 
    this.type = type;
    this.content = content;
    this.answers = answers;
    this.img = img;
}

// DUMMY DATA 
let firstquestion = new Question('Eerste vraag', 'Stem op een plan!', 1, "Alle gemaakte plannen van de bewoners, die mee hebben gedaan aan het ontwerpatelier, hebben we voor u op een rijtje gezet. U kunt elk plan bekijken door erop te klikken. Bij elk plan kunt commentaar geven of vragen stellen waar dit gewenst is. Hiernaast kunt u uw stem uitbrengen aan het plan dat voor u het beste zou werken. ",["Optie A", "Optie B", "Optie C","Optie A", "Optie B", "Optie C","Optie A", "Optie B", "Optie C"]);
let secondquestion = new Question('Tweede vraag', "", 2, "Onder het ontwerp vindt u een uitleg van het ontwerp en wordt er weergegeven wat er is gebruikt en hoeveel capaciteit dit oplevert.",'');
// let thirdquestion = new Question('Derde vraag',  'Wat is 5+5?', 1, 'Kun jij voor ons deze onwijs moeilijke vraag beantwoorden?', ['2', '10', '30'])

let questions = new Array(firstquestion, secondquestion);

function QuestionPage() {
    const [page, setPage] = useState(0);
    const usehistory = useHistory();

    const nextPage = () => {
        if (!!questions[page] && !!questions.length > page) {
            setPage(page + 1)
        } else {
            usehistory.push("/conclusionpage")
        }
    }

    const getQuestionComponent = () => {
        switch (questions[page].type) {
            case 1:
                return <MultipleChoiceQuestion question={questions[page]} button={nextPage}/>
            case 2:
                return <OpenQuestion question={questions[page]} button={nextPage} />
        }
    }

    return (
        <div>
            {getQuestionComponent()}
        </div>

    )
}

export default QuestionPage











// loop over the array of questions and check type 

// return div based on type 

// push outcome in array 

// console.log(questions)

// // LOOP OVER ARRAY & CHECK TYPE
// function TypeDecider() {
//     for (let i = 0; i < questions.length; i++) {
//         if (questions[i].type === 1) {
//             divs.push(MultipleChoicQuestion(questions[i]))
//         } else if (questions[i].type === 2) {
//             divs.push(OpenQuestion(questions[i]))
//         }
//     }
//     console.log(divs)
// }

// function getQuestionComponent(question) {
    //     let type = question.type;

    //     if (type === 1) {
    //         return (
    //             <div>
    //                 <h1>{question.title}</h1>
    //             </div>
    //         )
    //     } else if (type === 2) {
    //         return (
    //             <div>
    //                 <h1>{question.title}</h1>
    //             </div>
    //         )
    //     } else if (type === 3) {
    //         return (
    //             <div>

    //             </div>
    //         )
    //     }
    // }

