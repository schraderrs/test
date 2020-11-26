import React from "react";
import { withRouter } from "react-router-dom";
import '../assets/css/loadingpage.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

let tips = [
    'Windmolens staan maar 5% van de tijd stil. 95% van de tijd draaien de windmolens om energie op te wekken',
    '1.400 huishoudens krijgen energie door 1 windmolen. Een windmolen kan 1.400 huishoudens van energie voorzien.',
    'Een windmolen geeft u geen geluidsoverlast. Wanneer u op 500 meter staat van de windmolen dan hoort u maar 35 decibel aan geluid.',
    'Windmolens op zee zijn duurder dan op het land. Maar deze windmolens leveren wel meer stroom op dan de windmolens op het land.',
    'test1', 'test2', 'test3', 'test4', 'test5',
]

//tip is de placeholder voor de array items uit let tips, voor elke tip wordt een div aangemaakt met een paragraaf er in met de inhoud van die tip.
//van deze divs maakt de map functie een nieuwe array die weer word aangeroepen in de html als variable
let renderedOutput = tips.map(tip => <div className="tip-box"> <p className="tip-text">{tip}</p> </div>)


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
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

const props = {
        additionalTransfrom: 0,
        centerMode: false,
        partialVisible: true,
        swipeable: false,
        draggable: false,
        showDots: false,
        responsive: responsive,
        ssr: true, // means to render carousel on server-side.
        infinite: true,
        autoPlay: true,
        autoPlaySpeed: 1,
        keyBoardControl: false,
        customTransition: "all 1s linear",
        transitionDuration: 1000,
        containerClass: "carousel-container",
        arrows: false,
        slidesToSlide: 1,
}


function LoadingPage() {
    // const [tip, setTips] = useState(tips[0]);
    return (
        <div id="loadingpage-container">
            <div id="loading-text-container">
                <p className="header">Even <span className="green-text">geduld</span> a.u.b</p>
                <p className="sub-text">Er zijn nog 2 personen bezig met het ontwerpen van hun plan.
                Over 3:47 minuten kunt u alle plannen bekijken.</p>
            </div>

            <div id="tip-container">
                <Carousel {...props}>
                    {renderedOutput}
                </Carousel>
            </div>
        </div>
    )
}

// const nextTip = (setTips) => {
//     if (tipCount === (tips.length - 1)) {
//         setTips(tips[0]);
//         tipCount = 0;
//     }
//     else {
//         tipCount++;
//         setTips(tips[0 + tipCount]);
//     }
//     console.log(tipCount);
// }

export default withRouter(LoadingPage);