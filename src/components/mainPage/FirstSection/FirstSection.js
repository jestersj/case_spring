import React, {useState} from 'react';
import s from './FirstSection.module.css'
import Popup from "../Popup/Popup";
import LogoBlock from "../LogoBlock/LogoBlock";

const FirstSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <div className={'custom_container'}>
            <div className={s.cont}>
                <div className={s.block}>
                    <div className={[s.text, 'text_right'].join(' ')}>
                        <p className={s.small_text}>Начало регистрации</p>
                        <p className={s.big_text}>26 марта</p>
                    </div>
                    <LogoBlock/>
                    <div className={[s.text].join(' ')}>
                        <p className={s.small_text}>Финалы</p>
                        <p className={s.big_text}>22/24 апреля</p>
                    </div>
                </div>
            </div>
            <section className={s.section}>
                <h1 className={s.large_text}>Plekhanov Case <br/> SPRING 2024</h1>
                <div className={s.btn_group}>
                    <p>Крупнейшее студенческое соревнование по решению
                        <br/> бизнес-задач от <b>Plekhanov Case Club</b></p>
                    <button className={s.grad_button} onClick={toggle}>Зарегистрироваться</button>
                </div>
            </section>
            <Popup isOpen={isOpen} handleClose={handleClose}/>
        </div>
    );
};

export default FirstSection;