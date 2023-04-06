import React from "react";
import './bar.css';

import slot from './img/slot.webp';
import icon from './img/icon.webp';
import cubs from './img/cubs.webp';
import Winner from "../winners/Winners";
{/* <div className="overflow-hidden"> */ }

let Bar = () => {

    window.addEventListener('load', function () {
        var marquees = document.querySelectorAll('.js-marquee');
        marquees.forEach(function (marquee) {
            var canvas = marquee.querySelector('.marquee-canvas');
            var items = marquee.querySelectorAll('.marquee-item');
            var itemsToClone = Array.from(items).slice(0,5);
            itemsToClone.forEach(function (item) {
                var clone = item.cloneNode(true);
                canvas.appendChild(clone);
            });     
        });    
    });

    return (
        <section>
            <div className="container">
                <div className="bar flex relative xs:flex-col xs:pt-[270px]
                xs:h-[130px] xs:overflow-hidden xss:top-[-60px]">
                    <img src={slot} alt='slot' className="slot h-[480px] absolute 
                    left-[-299px] top-[-130px] xl:h-[295px] xl:left-[-125px] xl:top-[-80px]
                    xs:h-[400px] xs:left-[48%] xs:top-[-11px] m:left-[47%]"/>
                    <div className="bar_menu w-[90%] h-[65px] relative rounded-[30px] 
                        left-[100px] items-center top-[60%] xl:h-[60px] xl:left-[70px] xl:top[40px] 
                        xs:top-[50px] xs:w-[100%] xs:h-[65px] xs:rounded-[0px] xs:left-[50%] xs:right-[50%] ">
                        <div className="marquee js-marquee">
                            <div className="marquee-canvas flex flex-row mx-auto w-[2000px] my-[10px] h-[40px] 
                                            xl:w-[520px] xl:h-[40px] xs:w-[860px] xs:flex-wrap xs:mx-auto xms:ml-[0px] xms:mr-auto">
                                <Winner icon={icon} alt={icon} name={'Matan won'} prize={'$30.00'} />
                                <Winner icon={icon} alt={icon} name={'Matan won'} prize={'$30.00'} />
                                <Winner icon={icon} alt={icon} name={'Matan won'} prize={'$30.00'} />
                                <Winner icon={icon} alt={icon} name={'Matan won'} prize={'$30.00'} />
                                <Winner icon={icon} alt={icon} name={'Matan won'} prize={'$30.00'} />
                            </div>

                        </div>
                    </div>
                    <img src={cubs} alt='cubs' className="cubs h-[600px] absolute right-[-100px] top-[-220px] x:h-[500px] x:right-[-70px] x:top-[-220px] 
                    xl:h-[350px] xl:right-[0px] xl:top-[-120px] xs:h-[431px] xs:left-[50%] 
                    xs:top-[-71px] "/>
                </div>
            </div>
        </section>
    )
}

export default Bar

