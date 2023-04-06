import React from "react";
import './auth.css';

import closed from './img/closed.svg';
import key from './img/key.svg';
import mail from './img/mail.svg';
import phone from './img/phone.svg';

let Auth = (props) => {

    let fun = () => {
        props.setAuth(!props.auth)
        props.setSms(!props.sms)
    }

    return (
        <section className={props.auth  ? `sh fixed w-[100%] h-[100%] z-[100]` : `hidden`}>  
            <form className="rounded-[30px] relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[600px] h-[500px] z-[200] xss:w-[90%] xss:h-[360px]">
                <img />
                <h1 className="text-xlh relative left-[50%] translate-x-[-50%] text-center top-[10%] xss:text-xsh xs:text-[34px] xss:text-[24px]" dir={props.dir}>Login</h1>
                <div className="relative left-[50%] top-[45%] translate-x-[-50%] translate-y-[-50%] xss:w-[75%]">
                <div className="relative left-[50%] translate-x-[-50%] w-[400px] mb-[16px] xss:w-[100%]" dir={props.dir}>
                        <input placeholder="Phone" className="inp text-xssh py-[17px] px-[55px] rounded-[30px] xss:w-[100%] xss:h-[45px] xss:text-xl"/>
                        <img src={phone} className={props.dir ==='rtl'? `absolute top-[50%] translate-y-[-50%] right-[20px]` : 
                    `absolute top-[50%] translate-y-[-50%] left-[20px]`}/>
                    </div>
                    <div className="relative left-[50%] translate-x-[-50%] w-[400px] mb-[16px] xss:w-[100%]" dir={props.dir}>
                        <input placeholder="Password" className="inp text-xssh py-[17px] px-[55px] rounded-[30px] xss:w-[100%] xss:h-[45px] xss:text-xl"/>
                        <img src={key} className={props.dir ==='rtl'? `absolute top-[50%] translate-y-[-50%] right-[20px]` : 
                    `absolute top-[50%] translate-y-[-50%] left-[20px]`}/>
                    </div>
                </div>
                <div className="sig absolute left-[50%] translate-x-[-50%] text-center w-[65%] bottom-[9%] rounded-[30px] text-xl px-[100px] py-[35px] xss:w-[75%] 
                xss:px-[0] xss:pb-[30px] xss:h-[10px] xss:text-[18px] flex xss:py-[20px]" onClick={() => {fun()}}>
                   <p className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" dir={props.dir}>SIGN IN</p>
                </div>
                <img src={closed} className="absolute right-[5%] top-[5%] cursor-pointer xm:w-[30px] low:top-[3%]" 
                onClick={() => {props.setAuth(!props.auth)}}/>
            </form>
        </section>
    )
}
export default Auth