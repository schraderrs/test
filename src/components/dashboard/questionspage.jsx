import React, { useState } from "react";
import { withRouter, useHistory, NavLink } from "react-router-dom";

import OpenQuestion from './openquestion.jsx';
import MultipleChoiceQuestion from './multiplechoicequestion.jsx';
import '../../assets/css/dashboardquestions.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function DashboardQuestionPage() {
    // const usehistory = useHistory();
    // const addQuestion = () => {
    //     usehistory.push("/dashboard/dashboard-questions/popup")
    // }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, setValue] = useState(1);

    function Test(e) {
        setValue(e.target.value);
        // console.log(typeof(value));
    }

    const addQuestion = () => {
        switch (value) {
            case "1":
                return <OpenQuestion />
            case "2":
                return <MultipleChoiceQuestion />
            default:
                return <OpenQuestion />
        }
    }

    return (
        <div>
            <h1>Ontwerpatelier 1</h1>
            <Button variant="primary" onClick={handleShow}>
                Vraag toevoegen
            </Button>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Meerkeuze vraag 1
                        <Button variant="secondary">Delete</Button>
                        <Button variant="primary">Edit</Button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Card.Text>
                                Antwoord 1
                            </Card.Text>
                            <Card.Text>
                                Antwoord 2
                            </Card.Text>
                            <Card.Text>
                                Antwoord 3
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="1">
                        Meerkeuze vraag 2
                        <Button variant="secondary">Delete</Button>
                        <Button variant="primary">Edit</Button>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <Card.Text>
                                Antwoord 1
                            </Card.Text>
                            <Card.Text>
                                Antwoord 2
                            </Card.Text>
                            <Card.Text>
                                Antwoord 3
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        Open vraag 1
                        <Button variant="secondary">Delete</Button>
                        <Button variant="primary">Edit</Button>
                    </Card.Header>
                </Card>
            </Accordion>

            <Modal size="xl" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-4">
                            <select className="form-control" name="typevraag" id="vraagtype" onChange={Test} value={value}>
                                <option value="1">Open vraag</option>
                                <option value="2">Meerkeuze vraag</option>
                            </select>
                        </div>
                    </div>
                    {addQuestion()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuleren
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Voeg toe
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default DashboardQuestionPage