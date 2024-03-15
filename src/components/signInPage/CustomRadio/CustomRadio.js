import React from 'react';
import s from './CustomRadio.module.css'

const CustomRadio = ({value, checked,onClick}) => {
    return (
        <div className={s.cont}>
            <label
                onClick={() => onClick(value)}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                }}
            >
                <input type="radio" checked={checked} required={true}/>
                <span
                    style={{
                        minWidth: 30,
                        minHeight: 30,
                        border: '2px solid #7435f3',
                        borderRadius: '50%',
                        position: "relative"
                    }}
                >
                    {checked &&
                        <div
                            style={{
                                minWidth: 15,
                                minHeight: 15,
                                background: '#7435f3',
                                borderRadius: '50%',
                                position: "absolute",
                                top: 6,
                                left: 6
                            }}
                        />
                    }
                </span>
                {value}
            </label>
        </div>
    );
};

export default CustomRadio;