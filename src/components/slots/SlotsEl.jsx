import React from "react";
import './slotsEl.css';

import play from './img/play.png'

let SlotsEl = (props) => {

    return (
        <div className="sl-el relative w-[230px] h-[170px] rounded-[30px] mx-[10px] my-[10px] 
        cursor-pointer z-[4] xl:w-[150px] xl:h-[120px] xms:mx-[15px] xms:my-[15px] 
        low:h-[110px] low:m-[5.4px]">
        <a dir={props.dir} href={props.hr} className="w-[230px] h-[170px]">
            <div className="shadow z-[2] absolute w-[230px] h-[170px] rounded-[20px] 
            xl:w-[150px] xl:h-[120px] low:h-[110px]"></div>
            <img src={props.img} className="absolute w-[230px] h-[170px] z-[1] rounded-[20px] 
            xl:w-[150px] xl:h-[120px] low:h-[110px]"/>
            <div className="slotsCasEl_info absolute flex flex-col bottom-[10px] left-[10px] right-[10px] 
            z-[3]">
            <h2 className="text-xl mx-[0] my-[0] xl:text-xs low:text-xss">{props.name}</h2>
                <div className="flex items-center mx-[0] my-[0]">
                    <div className="w-[15px] h-[15px] rounded-[90px] bg-[white] relative flex">
                        <img src={play} className=" absolute w-[8px] top-[50%] left-[50%] 
                        translate-x-[-50%] translate-y-[-50%] xl:w-[7px]"/>
                    </div>
                    <p className="textEl text-xss my-[0] ml-[5px] mr-[0px] xl:text-low">{props.login}</p>
                </div>
            </div>
        </a>
        </div>
    )
}

export default SlotsEl