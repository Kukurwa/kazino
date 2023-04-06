import React from "react";
import Slider from "react-slick";

import './slider.css';

let SliderLiveGames = (props) => {

    let arr = [];

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        arrows: false,
        variableWidth: true,
        responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 4,
              },
            },
            {
                breakpoint: 715,
                settings: {
                  slidesToShow: 4,
                },
              },
              {
                breakpoint: 675,
                settings: {
                  slidesToShow: 2,
                },
              },
          ],
    };

    for(let i = 0; i < props.arr.length; i += 2) {
      try {
        arr.push(<div key={i} className="sl-el flex flex-col w-[230px] xl:w-[150px] slider:w-[130px] xl:mr-[5px] xl:ml-[0px] mx-[.5px] relative slider:mx-[10px]">{props.arr[i]}{props.arr[i+1]}</div>)
      } catch {
        arr.push(<div key={i} className="sl-el flex flex-col w-[230px] xl:w-[150px] slider:w-[130px] xl:mr-[5px] xl:ml-[0px] mx-[.5px] relative slider:mx-[10px]">{props.arr[i]}</div>)
      }
    }

    return (
        <div className="max-w-[100%] flex flex-row overflow-hidden z-[30]">
            <Slider {...settings}>
                {arr}
            </Slider>
        </div>
    )
}

export default SliderLiveGames