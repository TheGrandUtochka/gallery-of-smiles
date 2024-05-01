import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './styles.css'


const settings = {
    infinite: true,
    slidesToShow: 3,
    initialSlide: 0,
    speed: 1000,
    centerMode: true,
    className: "center",
    centerPadding: "60px",

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

interface CustomSliderProps {
    children?: React.ReactNode;
}

export default function CustomSlider({ children }: CustomSliderProps) {
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    )
}