import React from "react";
import { withRouter } from "react-router-dom";
import '../assets/css/conclusionpage.css';
import { Col, Container, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../assets/img/imagineers.png'

function ConclusionPage() {
    return (
        <Container fluid>
            <Row className='row1-cp'>
                <Col className='column1-cp' align='center'>
                    <div className='col1-container-cp'>
                        <div className='container-cp'>
                            <div className='header-text-cp'>
                                <p><span className='header-span-cp'>Bedankt</span> voor uw deelname aan dit ontwerpatelier!</p>
                            </div>
                            <div className='body-text-cp'>
                                <p>Wij zullen uw mening meenemen in de besluitvorming en houden u op de hoogte over de ontwikkelingen.</p>
                            </div>
                        </div>
                    </div>
                    <footer className='footer'>
                        <a href="https://www.theimagineers.com/" alt ='link to imagineers'>
                            <img src={img} alt='imagineers' ></img>
                        </a>
                    </footer>
                </Col>
                <Col className='column2-cp'>
                    <div className='bg_image-cp' alt='windmill'></div>
                </Col>
            </Row>
        </Container>
    );
}


export default withRouter(ConclusionPage);