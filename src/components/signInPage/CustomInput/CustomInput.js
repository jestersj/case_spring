import React from 'react';
import s from './CustomInput.model.css'

const CustomInput = ({label, value, onChange, description = ''}) => {
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    return (
        <label className={s.label}
               style={{
                   fontSize: '1.2rem',
        }}>
            {label}
            {description &&
                <>
                    <br/>
                    <span style={{
                        fontSize: '0.8rem',
                        fontWeight: '300'
                    }}>
                        {description}
                    </span>
                </>
            }
            <input value={value}
                   onChange={handleChange}
                   required={true}
                   type={'text'}
            />
        </label>
    );
};

export default CustomInput;