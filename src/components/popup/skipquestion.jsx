import { Button, Modal } from "react-bootstrap";
import { React } from 'react';

const  SkipQuestion = (props) => {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Weet je zeker dat je deze vraag wilt overslaan? </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Nee
                     </Button>
                    <Button variant="primary" onClick={props.submit}>
                        Ja, sla over
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default SkipQuestion