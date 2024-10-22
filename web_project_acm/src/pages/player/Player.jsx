
import React, { useRef } from "react";
import "./Player.css";
// import Player2 from './Playerb';

import image from '../../../src/images/download.jpeg'
import Image2 from '../../../src/images//1download.jpeg'
import Image3 from '../../../src/images//2download.jpeg'
import Image4 from '../../../src/images//3download.jpeg'
import Image5 from '../../../src/images//4download.jpeg'
import Image6 from '../../../src/images//5download.jpeg'
import Image7 from '../../../src/images//6download.jpeg'
import Image8 from '../../../src/images//7download.jpeg'
import Image9 from '../../../src/images//8download.jpeg'
import Image10 from '../../../src/images//9download.jpeg'
import Image11 from '../../../src/images//10download.jpeg'

const Player = () => {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    };

    return (
        <div className="sizeset">
            <div className="slider-container">
                <button onClick={scrollLeft} className="slider-button">{"<"}</button>
                <div className="slider" ref={sliderRef}>
                    <div className="slider-item">

                        <img src={image} alt="Image 1" />
                    </div>

                    <div className="slider-item">
                        <img src={Image2} alt="Image 2" />
                    </div>

                    <div className="slider-item">
                        <img src={Image3} alt="Image 3" />
                    </div>
                    <div className="slider-item">
                        <img src={Image4} alt="Image 4" />
                    </div>
                    <div className="slider-item">
                        <img src={Image5} alt="Image 5" />
                    </div>
                    <div className="slider-item">
                        <img src={Image6} alt="Image 6" />
                    </div>

                    <div className="slider-item">
                        <img src={Image7} alt="Image 7" />
                    </div>
                    <div className="slider-item">
                        <img src={Image8} alt="Image 8" />
                    </div>
                    <div className="slider-item">
                        <img src={Image9} alt="Image 9" />
                    </div>
                    <div className="slider-item">
                        <img src={Image10} alt="Image 10" />
                    </div>
                    <div className="slider-item">
                        <img src={Image11} alt="Image 11" />
                    </div>

                </div>



                <button onClick={scrollRight} className="slider-button">{">"}</button>
            </div>
            <div className="slider-container">
                <button onClick={scrollLeft} className="slider-button">{"<"}</button>
                <div className="slider" ref={sliderRef}>
                    <div className="slider-item">
                        <img src={Image5} alt="Image 5" />
                    </div>
                    <div className="slider-item">
                        <img src={Image6} alt="Image 6" />
                    </div>

                    <div className="slider-item">
                        <img src={Image7} alt="Image 7" />
                    </div>
                    <div className="slider-item">
                        <img src={Image8} alt="Image 8" />
                    </div>
                    <div className="slider-item">
                        <img src={Image9} alt="Image 9" />
                    </div>
                    <div className="slider-item">
                        <img src={Image10} alt="Image 10" />
                    </div>
                    <div className="slider-item">
                        <img src={Image11} alt="Image 11" />
                    </div>

                    <div className="slider-item">

                        <img src={image} alt="Image 1" />
                    </div>

                    <div className="slider-item">
                        <img src={Image2} alt="Image 2" />
                    </div>

                    <div className="slider-item">
                        <img src={Image3} alt="Image 3" />
                    </div>
                    <div className="slider-item">
                        <img src={Image4} alt="Image 4" />
                    </div>

                </div>



                <button onClick={scrollRight} className="slider-button">{">"}</button>
            </div>
            <div className="slider-container">
                <button onClick={scrollLeft} className="slider-button">{"<"}</button>
                <div className="slider" ref={sliderRef}>

                    <div className="slider-item">
                        <img src={Image6} alt="Image 6" />
                    </div>

                    <div className="slider-item">
                        <img src={Image7} alt="Image 7" />
                    </div>
                    <div className="slider-item">
                        <img src={Image8} alt="Image 8" />
                    </div>
                    <div className="slider-item">
                        <img src={Image9} alt="Image 9" />
                    </div>
                    <div className="slider-item">
                        <img src={Image10} alt="Image 10" />
                    </div>
                    <div className="slider-item">
                        <img src={Image11} alt="Image 11" />
                    </div>

                </div>



                <button onClick={scrollRight} className="slider-button">{">"}</button>
            </div>
        </div>
    );
};



export default Player;


