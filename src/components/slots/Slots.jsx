import React from "react";
import './slots.css';
import SlotsEl from "./SlotsEl";

import money from './img/money.png';
import jeton from './img/jeton.svg';
import cart from './img/cart.svg';
import j777 from './img/777.webp';
import whiteMoney from './img/whiteMoney.png';
import znak from './img/znak.svg'

import inform from './info.json'

let Slots = (props) => {

   let arr = inform.list.map((el, i) => 
        <SlotsEl img={el.icon_2} name={el.name} hr={'./'} login={'Login To Play'} key={i} dir={props.dir}/>
   )

    return <section className="relative z-[8]">

        <div className="xss:relative xss:mt-[50px] m:mt-[70px]">
            <div className="container">

                <div className="slots_tage flex items-center mx-auto my-[0] w-[150px] mt-[80px] 
                xl:w-[140px] xss:top-[-2%] xss:z-[3] xss:left-[50%] xss:top-[-.8%]
                xss:translate-x-[-50%] xss:absolute xss:w-[100px] 
                xss:mt-[80px] xms:top-[-1%]">
                    <img src={znak} className="w-[25px] h-[25px] mr-[11px]"/>
                    <h2 className="text-xlh mr-[7px] xl:text-xsh xss:text-xssh">Slots</h2>
                </div>

                <div className="slots relative mt-[60px] rounded-[30px]
                xs:w-[90%] xs:mx-auto xs:pt-[20px] xss:pt-[100px] 
                pb-[0px] low:w-[93%]
                ">
                    <div className="flex flex-wrap w-[1000px] mx-[50px] my-[50px] justify-center 
                    xl:w-[700px] xs:w-[100%] xs:mx-[0px] xs:mb-[0px] 
                    xs:mt-[20px] xs:pb-[40px]">
                        {arr}
                    </div>
                    <img src={money} className="absolute top-[-60px] left-[20%] 
                    xl:w-[90px] xl:top-[-40px] xss:hidden"/>
                    <img src={jeton} className="absolute top-[25%] right-[-60px] 
                    xl:w-[80px] xl:right-[-30px] xs:right-[5px] xss:hidden"/>
                    <img src={cart} className="absolute top-[40%] left-[-40px] 
                    xs:left-[-20px] xss:hidden"/>
                    <img src={j777} className="absolute w-[300px] bottom-[-50px] right-[-80px] 
                    xl:w-[180px] xl:right-[-20px] xs:right-[-20px] xss:top-[-3%] 
                    xms:top-[-1.5%] xms:w-[150px] m:w-[130px] m:right-[-15px]"/>
                    <img src={whiteMoney} className="absolute bottom-[-50px] left-[35%] 
                    xl:w-[90px] xss:hidden"/>
                </div>
            </div>
        </div>

    </section>
}

export default Slots