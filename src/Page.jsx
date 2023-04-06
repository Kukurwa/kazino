import React, { useState } from "react";
import Header from "./components/header/Header";
import Bar from "./components/bar/Bar";
import LiveCasino from "./components/liveCasino/LiveCasino";
import Crash from "./components/crash/Crash";
import Slots from "./components/slots/Slots";
import Footer from "./components/footer/Foter";
import Reg from "./components/reg/Reg";
import Auth from "./components/auth/Auth";
import Sms from "./components/sms/Sms";

let Page = () => {

    const [sign, setSign] = useState(0);
    const [auth, setAuth] = useState(0);
    const [sms, setSms] = useState(0);
    const [dir, setDir] = useState('ltr');

    return (
        <div> 
            <Reg dir={dir} setSign={setSign} sign={sign} setSms={setSms} sms={sms}/>
            <Auth dir={dir} setAuth={setAuth} auth={auth} setSms={setSms} sms={sms}/>
            <Sms dir={dir} setAuth={setAuth} sign={sign} setSms={setSms} sms={sms}/>
            <Header dir={dir} setDir={setDir} setSign={setSign} sign={sign} setAuth={setAuth} auth={auth}/>
            <Bar dir={dir}/>
            <LiveCasino dir={dir}/>
            <Crash dir={dir}/>
            <Slots dir={dir}/>
            <Footer dir={dir}/>
        </div>
    )
}

export default Page
