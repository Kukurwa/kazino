import React from "react";
import './crash.css';

import card from './img/card.webp';
import crashLogo from './img/crashLogo.webp';
import mask from './img/mask.webp';
import stat from './img/stat.svg';
import stat_mob from './img/znak.svg';
import mon_mob_1 from './img/mon_mob_1.png';
import SlotsEl from "../slots/SlotsEl";
import Aviator from "../aviator/Aviator";

let Crash = (props) => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col mt-[32px] xss:relative xss:mt-[-140px]">
                    <div className="crash_tage flex items-center mx-auto mt-[30px] mb-[65px]  xss:absolute xss:left-[50%] xss:top-[36%] low:w-[185px]">
                        <img src={stat} className="w-[25px] h-[25px] mr-[11px] xss:hidden"/>
                        <img src={stat_mob} className="hidden xss:w-[25px] xss:h-[25px] mr-[11px] xss:block"/>
                        <h2 className="text-xlh mr-[7px] xl:text-xsh xss:text-xssh">Crash games</h2>
                    </div>
                    <div className="crash_main flex px-[35px] py-[35px] rounded-[30px] h-[140px] relative 
                    xl:flex-wrap xl:w-[80%] xl:mx-auto xl:justify-center xl:px-[20px] xl:py-[20px] xl:h-[105px] 
                    xss:h-[230px] xss:mt-[230px] xss:flex-nowrap xss:flex-row xss:h-[430px] m:h-[380px]">
                        <SlotsEl hr='./' img={mask} login={'Login To Play'} dir={props.dir}/>
                        <Aviator aviator={crashLogo} dir={props.dir}/>
                        <SlotsEl hr='./' img={mask} login={'Login To Play'} dir={props.dir}/>
                        <img src={card} className="absolute right-[28%] w-[80px] top-[-17%] xl:w-[50px] xl:right-[22%] 
                        xs:top-[-15%] xss:hidden"/>
                        <img src={mon_mob_1} className="hidden xss:absolute xss:top-[-6%] xss:right-[370px] xss:left-[0px]
                        xss:block xss:w-[50px]"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Crash