import React from "react";

let LanguageEl = (props) => {

    let fun = () => {
        debugger
        if((props.alt == 'izr') || (props.alt == 'pal')) {
            props.setDir('rtl')
        } else {
            props.setDir('ltr')
        }
    }

    return (
        <div className="header_language-el w-[44px] h-[44px] rounded-full relative boxShadow-xl z-[9]
        cursor-pointer mx-auto my-auto xl:w-[35px] xl:h-[35px] xs:my-[3px] xs:mx-auto xss:w-[45px]
                            xss:h-[45px] xm:w-[35px] xm:h-[35px]" onClick={() => {fun()}}>
            <img src={props.lang} alt={props.alt} className="absolute top-[50%] left-[50%]
                                translate-x-[-50%] translate-y-[-50%]
                                xl:w-[60%] xss:w-[72%] xm:w-[60%]"/>
        </div>
    )
}

export default LanguageEl

