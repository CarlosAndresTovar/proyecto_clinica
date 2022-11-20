import React from "react";
import './Home.css';
import Certifications from "./Certifications.svg";
import medicalAppointments from "./medicalAppointments.svg";
import autorizationsMipres from "./autorizationsMipres.svg";
import xRays from "./xRays.svg";
import Sincronizations from "./Sincronizations.svg";
import checkBilling from "./checkBilling.svg";
import Whatsapp from "./Whatsapp.svg";
import Header from "./Header";

const Mainhome = () => {
    return (
        <>
            {/*<header>
                <div className="deployHome">
                    <div className="iconHome">
                        <FaEquals size="5vmin" />
                    </div>
                </div>
                <div className="notificationsHome">
                    <img id="Notifications" src={Notifications} alt="Notifications"></img>
                </div>
            </header>*/}
            <Header />
            <div className="sectionHome">
                <div className="firstSection">
                    <div className="Items">
                        <img id="Certifications" src={Certifications} alt="Certifications"></img>
                    </div>
                    <div className="Items">
                        <img id="medicalAppointments" src={medicalAppointments} alt="medicalAppointments"></img>
                    </div>
                </div>
                <div className="secondSection">
                    <div className="Items">
                        <img id="autorizationsMipres" src={autorizationsMipres} alt="autorizationsMipres"></img>
                    </div>
                    <div className="Items">
                        <img id="xRays" src={xRays} alt="xRays"></img>
                    </div>
                </div>
                <div className="thirdSection">
                    <div className="Items">
                        <img id="Sincronizations" src={Sincronizations} alt="Sincronizations"></img>
                    </div>
                    <div className="Items">
                        <img id="checkBilling" src={checkBilling} alt="checkBilling"></img>
                    </div>
                </div>
            </div>
            <section className="Whatsapp">
                <img id="Whatsapp" src={Whatsapp} alt="Whatsapp"></img>
            </section>
        </>
    )
}

export default Mainhome;