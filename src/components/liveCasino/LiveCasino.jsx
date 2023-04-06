import React from "react";
import './liveCasino.css'

import icon1 from './img/icon1.svg';
import cub1 from './img/cub1.webp'
import test from './img/test.png'
import SlotsEl from "../slots/SlotsEl";
import cub_mob from './img/cub_mob.webp';
import SliderLiveGames from "../sliderLiveGames/SliderLiveGames";

let LiveCasino = (props) => {

    let arr = [];

    for(let i = 0; i < 24; i++) {
        arr.push(<SlotsEl name="Baccarat" img={test} hr={'./'} login={'Login To Play'} dir={props.dir}/>)
    }

    return (
        <section>
            <div className="container">
                <div className="flex flex-col mt-[150px] xl:mt-[120px] xs:mt-[0px]">
                    <div className="liveCasino_tage flex items-center mt-[8px] mb-[39px] mx-auto xss:mb-[-50px] xs:mt-[40px]">
                        <img src={icon1} className="w-[25px] h-[25px] mr-[11px]"/>
                        <h2 className="text-xlh mr-[5px] xl:text-xsh xss:text-xssh">Live casino</h2>
                    </div>
                    <div className="liveCasino_main flex px-[45px] py-[45px] rounded-[30px] relative 
                    flex-wrap xl:w-[96%] xl:mx-auto xl:justify-center xl:px-[20px] xl:py-[20px]
                    xss:pt-[60px] low:px-[10px]">
                        <SliderLiveGames arr={arr}/>
                        <img src={cub1} className="absolute w-[70px] bottom-[-35px] left-[-10px] xss:hidden"/>
                        <img src={cub_mob} className="hidden xss:block xss:w-[50px] xss:absolute xss:top-[-30px] 
                        xss:bottom-[100%] xss:left-[77%] m:top-[-22px]"/>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default LiveCasino