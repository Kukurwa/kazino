import React from "react";

let Winner = (props) => {
    return (
        <div className="marquee-item bar_menu-base-el flex items-center my-[auto] mx-[50px] h-[2px] xss:mx-[10px]">
            <img src={props.icon} alt={props.alt} className="w-[43px] h-[43px] mr-[10px]
        xl:w-[32px] xl:h-[32px] xs:w-[45px] xs:h-[45px] xl:mr-[7px] xss:w-[39px] xss:h-[39px] xss:mr-[5px] 
        xss:mx-auto"/>
            <div className="flex flex-row xss:flex-col">
                <p className="m-[0px] text-left text-xl xl:text-xss">{props.name}</p>
                <p className="m-[0px] ml-[5px] text-left text-xl xl:text-xss xss:ml-[6px]">{props.prize}</p>
            </div>
        </div>
    )
}

export default Winner