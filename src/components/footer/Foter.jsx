import React from "react";
import './footer.css';

import bacgr from './img/bgCoins.webp';
import cubik from './img/cubik.svg';
import cart_2 from './img/cart.svg';
import mon from './img/whiteMoney.png';

let Footer = () => {
    return (
        <section className="relative z-1 h-[680px] mt-[-130px] overflow-hidden 
        xs:mt-[80px] xs:h-[300px] xs:mt-[0] xss:h-[200px] xss:mt-[10px] m:h-[270px]">
             <img src={bacgr} className="footer_backgr w-[100%] max-w-[1600px] absolute 
             left-[54%] top-[7%] translate-x-[-49%] translate-y-[-50%] pt-[250px] xs:hidden"/> 
            <div className="container absolute left-[50%] translate-x-[-50%] bottom-[50px] xss:bottom-[15px]">
                <div className="footer_info relative rounded-[30px] 
                xs:w-[450px] xs:left-[50%] xs:translate-x-[-50%]
                xs:top-[0px] m:w-[400px] m:pt-[17px] m:top-[20px] low:w-[330px]">
                    <p className="text-xssh py-[30px] xl:text-xl xs:w-[450px] m:w-[370px] xs:py-[20px] low:w-[258px] low:mx-auto low:text-xs">
                        Wa are Committed to maintaining Credibility and fairness in front of our customers
                    </p>
                    <img src={cubik} className="absolute right-[20%] top-[-30px] 
                    m:hidden"/>
                    <img src={cart_2} className="absolute left-[13%] top-[78%]
                    m:hidden"/>
                    <img src={mon} className="hidden m:absolute m:block 
                    m:left-[50%] translate-x-[-50%] m:top-[-35px] m:w-[65px]"/>
                </div>
                <p className="copy text-xs mt-[40px]">Copyright © 2018 Roalty777. All Rights Reserved</p>
            </div>
        </section>
    )
}

export default Footer