import {useEffect, useState} from "react";
import FrontSofa from './../images/Front-sofa.png';
import Wardrobe from '../images/Wardrobe.png';
import Refrigerator from '../images/Refrigerator.png'
import StenselBar from '../images/StenseleBarTable.png'
import WinterfintMat from '../images/WinterfintMat.png'
import GamingChair from '../images/GamingChair.png'
import ViewNow from "../pages/ViewNow";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";


const Slider = () =>{
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else {
            setCurrentSlide(4);
        }
    };
    const handleNext = () => {
        if (currentSlide < 4) {
            setCurrentSlide(currentSlide + 1);
        } else {
            setCurrentSlide(0);
        }
    };


    useEffect(() => {
        const interval = setInterval(() =>{
            handleNext()
        }, 3000)
        return () =>{
            clearInterval(interval)
        }
    }, [currentSlide]);

    return (
        <div className='custom-slider'>
            <div className='slider-content' style={{transform: `translateX(-${currentSlide*100}%)`}}>
                <div className='slider'>
                    <img src = {FrontSofa} alt='sofa'/>
                    <div>
                        <h2>HOT DEALS THIS WEEK</h2>
                        <h3>SALE 50% OFF <br /> MODERN FURNITURE</h3>
                        <ViewNow />
                    </div>
                </div>
                <div className='slider'>
                    <img src = {Refrigerator} alt = 'refrigerator' style={{width: '300px', height: '300px'}}/>
                    <div>
                        <h2>HOT DEALS THIS WEEK</h2>
                        <h3>SALE 30% OFF <br /> MODERN FURNITURE</h3>
                    </div>
                </div>
                <div className='slider'>
                    <img src = {StenselBar} alt = 'stensel bar' style = {{width: '300px', height: '300px'}}/>
                    <div>
                        <h2>HOT DEALS THIS WEEK</h2>
                        <h3>SALE 20% OFF <br /> MODERN FURNITURE</h3>
                    </div>
                </div>
                <div className='slider'>
                    <img src = {WinterfintMat} alt = 'mat' style = {{width: '300px', height: '300px'}}/>
                    <div>
                        <h2>HOT DEALS THIS WEEK</h2>
                        <h3>SALE 60% OFF <br /> MODERN FURNITURE</h3>
                    </div>
                </div>
                <div className='slider'>
                    <img src = {GamingChair} alt = 'gaming chair' style = {{width: '300px', height: '300px'}}/>
                    <div>
                        <h2>HOT DEALS THIS WEEK</h2>
                        <h3>SALE 70% OFF <br /> MODERN FURNITURE</h3>
                    </div>
                </div>
            </div>
            <div className='slider-btns'>
                <button onClick={handlePrev}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={handleNext}>
                    <FontAwesomeIcon icon={faChevronRight}/>
                </button>
            </div>
        </div>

    )
}

export default Slider;