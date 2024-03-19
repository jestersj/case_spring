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
                        minWidth: 32,
                        minHeight: 32,
                        border: '2px solid #7435f3',
                        borderRadius: '50%',
                        position: "relative"
                    }}
                >
                    {checked &&
                        <div
                            style={{
                                minWidth: 16,
                                minHeight: 16,
                                background: '#7435f3',
                                borderRadius: '50%',
                                position: "absolute",
                                top: 'calc(50% - 8px)',
                                left: 'calc(50% - 8px)'
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