import React, { useState } from "react";
import './header.css';

import eng from './img/eng.png';
import izr from './img/izr.png';
import pal from './img/pal.png';
import ru from './img/ru.png';
import tur from './img/tur.png';

import logo from './img/logo.png';
import arrow from './img/arrow.svg';
import wp from './img/wp.svg';
import LanguageEl from "../language/Language";


let Header = (props) => {

    const [sign, setSign] = useState(0)

    return (
        <section>
            <div className="flex relative w-[1200px] mx-auto my-0 xl:max-w-[850px] xl:w-auto">
                <div className="container">
                    <div className="flex mx-auto mx-0 xss:flex-col">

                        <div className="flex w-[279px] xl:w-[200px] xs:max-w-[125px]
                        xs:flex-wrap xs:h-[80px] xs:my-auto xss:flex-nowrap
                        xss:max-w-[310px] xss:w-[100%] xss:h-[40px] xss:mb-[-20px]
                        xss:mt-[20px] xss:mx-auto">
                            <LanguageEl lang={eng} dir={props.dir} alt='eng' setDir={props.setDir}/>
                            <LanguageEl lang={ru} alt='ru' setDir={props.setDir}/>
                            <LanguageEl lang={izr} alt='izr' setDir={props.setDir}/>
                            <LanguageEl lang={pal} alt='pal' setDir={props.setDir}/>
                            <LanguageEl lang={tur} alt='tur' setDir={props.setDir}/>
                        </div>

                        <div className="xl:w-[315px] xss:w-[440px] xm:w-[360px]">
                            <img src={logo} alt='logo' className="xl:w-[100%]"/>
                        </div>

                        <div className="flex xs:flex-col h-[100px] my-auto xs:h-[85px] xs:my-auto xss:relative
                        xss:flex-row xss:w-[80%] xss:mx-auto xss:mb-[50px] xss:items-center xss:mt-[-25px]
                        xs:z-9 xm:mt-[-22px]">
                            <div className="header_auth-login items-center cursor-pointer flex xs:mx-auto xs:mb=[0px] xs:mt-auto xss:ml-[0px]
                           xs:order-2 xss:my-auto z-[20]"  onClick={() => {props.setAuth(!props.auth)}}>
                                <img src={arrow} alt="arrow" />
                                <p dir={props.dir} className="text text-xl ml-[9px] xl:text-xs xm:text-xss">LOGIN</p>
                            </div>
                            <div className="header_auth-sign flex xs:h-[50px] xss:absolute xss:left-[50%]
                            xm:h-[40px] z-[20]" onClick={() => {props.setSign(!props.sign)}}>
                                <p dir={props.dir} className=" text text-xl ml-[23px] px-[50px] py-[23px] rounded-[40px] 
                                w-[175px] xl:text-xs xl:px-[30px] xl:py-[15px] 
                                xl:w-[122px] xl:ml-[10px] xs:ml-[0px] xm:text-xss
                                xm:px-[30px] xm:py-[10px] xm:w-[115px]">SIGN UP</p>
                            </div>
                            <a className="wp-el hidden xss:w-[44px] xss:h-[44px] xss:rounded-[90px]
                            xss:absolute xss:mx-auto xss:my-auto xss:mr-[0px] xss:right-[0]
                            xss:block xm:w-[37px] xm:h-[37px]" href="./">
                                <img src={wp} alt='wp' className="xss:w-[60%] xss:absolute xss:top-[50%]
                                xss:left-[50%]"/>
                            </a>
                        </div>
                    </div>
                </div>
                <a className="wp w-[44px] h-[44px] rounded-[90px] absolute mx-auto my-auto mr-[0px] left-[100%]
                top-[50%] xl:w-[35px] xl:h-[35px] xl:ml-[10px] xl:left-[95%]
                xs:hidden" href="./">
                    <img src={wp} alt='wp' className="absolute top-[50%] left-[50%] xl:w-[60%]"/>
                </a>
            </div>
        </section>
    )
}

export default Header

