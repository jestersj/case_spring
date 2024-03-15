import React, {useState} from 'react';
import s from './SignUpSection.module.css'
import Popup from "../Popup/Popup";

const SignUpSection = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <div className={s.bg}>
            <div className={'custom_container'}>
                <div className={s.cont}>
                    <h2 className={s.large_text}>Зарегистрируйтесь прямо сейчас</h2>
                    <button className={s.grad_button} onClick={toggle}>Зарегистрироваться</button>
                    <Popup isOpen={isOpen} handleClose={handleClose}/>
                </div>
            </div>
        </div>
    );
};

export default SignUpSection;