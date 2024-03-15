import React from 'react';
import s from './Popup.module.css'
import {createPortal} from "react-dom";
import {Modal} from "react-bootstrap";
import {Link} from "react-router-dom";

const Popup = ({isOpen, handleClose}) => {
    return (
        createPortal(
            <Modal
                show={isOpen}
                onHide={handleClose}
                centered={true}
                size={'xl'}
            >
                <Modal.Body>
                    <span className={s.close} onClick={handleClose}>&#10005;</span>
                    <p className={s.large_text}>
                        Являетесь ли вы студентом РЭУ им. Г.В. Плеханова?
                    </p>
                    <div className={s.btn_group}>
                        <Link to={'/rea'} className={s.secondary_grad_button}>
                            Да, я учусь в рэу им. г. в. плеханова
                        </Link>
                        <Link to={'/other'} className={s.grad_button}>
                            Нет, я студент другого университета
                        </Link>
                    </div>
                </Modal.Body>
            </Modal>
        , document.body)
    );
};

export default Popup;