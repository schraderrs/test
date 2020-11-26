import { React, useState } from 'react';
import { Col, Container, Row, Button, Modal } from "react-bootstrap";
import '../../assets/css/multiplechoice.css';
import planA from '../../assets/img/Plan A.png';
import planB from '../../assets/img/Plan B.png';
import planC from '../../assets/img/Plan C.png';
import Carousel from "react-multi-carousel"
import SkipQuestion from '../popup/skipquestion'

function MultipleChoiceQuestion(props) {
    let renderedOutput = props.question.answers.map(question => <div key={question} className='question-mc'>
        <input type='radio' className='checkbox-mc' value={question} onChange={e => isChecked(e)} name='test'></input><label>{question} </label></div>)

    let value

    function isChecked(e) {
        e.target.checked ? value = e.target.value : value = ''
        console.log(value)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let imgs = [planA, planB, planC, planA, planB, planC, planA, planB, planC];
    let renderedImgs = imgs.map(img => <img src={img} key={img} draggable={false} className='img'></img>)
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktopPlus: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 2200, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1500, min: 1024 },
            items: 3
        },
        mobilePlus: {
            breakpoint: { max: 1100, min: 0 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };

    const handleFormSubmit = () => {
        setShow(false)
        console.log(value);

        // value != '' ? props.button() : alert('DOE WAT') 
        props.button();
        
    }

    return (
        <Container fluid>
            {/* {ScrollBar()} */}
            {show ? <SkipQuestion show = {show} handleClose = {handleClose} submit = {handleFormSubmit}/> : ''}
            <Row>
                <Col className='col1-mc'>
                    <div className='col1-container-mc'>
                        <h1 className='title-mc'>{props.question.title}</h1>
                        <p className='text-mc'>{props.question.content}</p>
                    </div>
                </Col>
                <Col className='col1-mc'>
                    <div className='col1-container-mc'>
                        <h2 className='title-mc'>{props.question.subtitle}</h2>
                        <div className='test123'>
                            {renderedOutput}
                        </div>
                        <button onClick={handleFormSubmit} className='vote-mc'>Stemmen</button>
                        <button className='skip-mc' onClick={handleShow}>Sla deze vraag over</button>
                    </div>
                </Col>
            </Row>
            <div className='tip-container-mc' >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                // customButtonGroup={<CustomSlider />}
                >
                    {renderedImgs}
                </Carousel>
            </div>
        </Container>
    )
}

export default MultipleChoiceQuestion;








        // SCROLLBAR LATER IMPLEMENTEREN
    // const ScrollBar = () => {
    //     const [additionalTransfrom, setadditionalTransfrom] = useState(0)

    //     const CustomSlider = ({ carouselState }) => {
    //         let value = 0;
    //         let carouselItemWidth = 0;
    //         if (this.Carousel) {
    //             carouselItemWidth = this.Carousel.state.itemWidth;
    //             const maxTranslateX = Math.round(
    //                 carouselItemWidth * (this.Carousel.state.totalItems - this.Carousel.state.slidesToShow) + 150
    //             );
    //             value = maxTranslateX / 100;
    //         }
    //         const { transform } = carouselState
    //         return (
    //             <div className="custom-slider">
    //                 <input
    //                     type="range"
    //                     value={Math.round(Math.abs(transform) / value)}
    //                     defaultValue={0}
    //                     max={(carouselItemWidth * (carouselState.totalItems - carouselState.slidesToShow) + (additionalTransfrom === 150 ? 0 : 150)) / value}
    //                     onChange={e => {
    //                         if (this.Carousel.isAnimationAllowed) {
    //                             this.Carousel.isAnimationAllowed = false;
    //                         }
    //                         const nextTransform = e.target.value * value;
    //                         const nextSlide = Math.round(nextTransform / carouselItemWidth);
    //                         if (e.target.value == 0 && additionalTransfrom === 150) {
    //                             this.Carousel.isAnimationAllowed = true;
    //                             setadditionalTransfrom(0);
    //                         }
    //                         this.Carousel.setState({ transform: -nextTransform, currentSlide: nextSlide});
    //                     }}
    //                     className="custom-slider__input"
    //                 />
    //             </div>
    //         );
    //     }