import React from "react";
import {FaEquals} from "react-icons/fa";
import "./Header.css";
import Logo from "../../pages/Login/components/Logo/Logo.svg";
import Pacientes from "./pacientes.svg";
import Llamadas from "./llamadas.svg";
import Calendario from "./calendario.svg";
import Historial from "./historial.svg";
import Configuraciones from "./configuraciones.svg";
import Compartir from "./compartir.svg";
import Ayuda from "./ayuda.svg";
import Salir from "./salir.svg";
import { useState } from "react";
import ToggleSwitch from "./Toogle";

const Header = () => {

    const updateMenu = () => {
        if (!menu) {
            setMenu(true)
        }else {
            setMenu(false)
        }
    }
    
    const [menu, setMenu] = useState(false)

    return (
        <>
            <header>
                <div className="left_area">
                {!menu &&
                    <i onClick={updateMenu}><FaEquals size="5vmin" /></i>
                }
                </div>
            </header>
            {menu &&
                <div className="sidebar">
                    <div className="sidebar-menu">
                        <i onClick={updateMenu}><FaEquals size="5vmin" /></i>
                    </div>
                    <div className="perfil">
                        <div className="section-logo-perfil">
                            <img src={Logo} className="logo-perfil" alt="Logo" />
                        </div>
                        <div>
                            <span>Wilson Calvo</span>
                        </div>
                    </div>
                    <div className="menu-principal">
                        <ToggleSwitch label="N"/>
                        <div className="menu">
                            <img src={Pacientes} alt="Pacientes" />
                            <a href="/#" className="paciente">Pacientes</a>
                        </div>
                        <div className="menu">
                            <img src={Llamadas} alt="Llamadas" />
                            <a href="/#" className="llamadas">Llamadas</a>
                        </div>
                        <div className="menu">
                            <img src={Calendario} alt="Calendario" />
                            <a href="/#" className="Calendario">Calendario</a>
                        </div>
                        <div className="menu">
                            <img src={Historial} alt="Historial" />
                            <a href="/#" className="historial">Historial</a>
                        </div>
                        <div className="menu">
                            <img src={Configuraciones} alt="Configuraciones" />
                            <a href="/#" className="configuración">Configuración</a>
                        </div>
                        <div className="menu">
                            <img src={Compartir} alt="Compartir" />
                            <a href="/#" className="compartir">Compartir</a>
                        </div>
                        <div className="menu">
                            <img src={Ayuda} alt="Ayuda" />
                            <a href="/#" className="ayuda">Ayuda</a>
                        </div>
                        <div className="menu salir">
                            <img src={Salir} alt="Ayuda" />
                            <a href="/#" className="salir">Salir</a>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Header;