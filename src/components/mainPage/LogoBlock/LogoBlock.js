import React from 'react';
import s from "./LogoBlock.module.css";
import logo from "../../../assets/logo.svg";

const LogoBlock = () => {
    return (
        <div className={s.box}>
            <img src={logo} alt={''} width={60}/>
        </div>
    );
};

export default LogoBlock;