import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../../../public/banner/banner (1).jpeg"
import banner2 from "../../../../public/banner/banner (1).jpg"
import banner3 from "../../../../public/banner/banner (2).jpg"
import banner4 from "../../../../public/banner/banner (3).jpg"
import banner5 from "../../../../public/banner/banner (4).jpg"
import banner6 from "../../../../public/banner/banner (5).jpg"
const Banner = () => {

    return (
        <div className='container mx-auto mt-0'>
            <Carousel>
                <div className='absolute'>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;