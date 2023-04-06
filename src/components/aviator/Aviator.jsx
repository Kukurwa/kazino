import React from "react";

let Aviator = (props) => {

    return (
        <a href="./" dir={props.dir}>
            <img src={props.aviator} className="absolute left-[50%] top-[50%] translate-x-[-50%]
        translate-y-[-50%] xl:w-[250px] xss:top-[45%] xss:w-[220px]"/>
        </a>
    )
}

export default Aviator