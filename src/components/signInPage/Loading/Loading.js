import React from 'react';
import icon from '../../../assets/arrow-clockwise.svg'
import s from './Loading.module.css'

const Loading = () => {
    return (
        <div className={s.cont}>
            <img src={icon} alt={''} className={s.img}/>
        </div>
    );
};

export default Loading;