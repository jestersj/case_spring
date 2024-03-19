import React from 'react';
import s from "./LogoBlock.module.css";
import logo from "../../../assets/logo.svg";
import {Link} from "react-router-dom";

const LogoBlock = () => {
    return (
        <Link to={'/'} className={s.box}>
            <img src={logo} alt={''}/>
        </Link>
    );
};

export default LogoBlock;