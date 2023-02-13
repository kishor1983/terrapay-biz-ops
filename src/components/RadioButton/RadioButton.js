import React from 'react';

const RadioButton = ({id, name, label, value, onChangeRadio, checked, disabled}) => {

    const handleChange = (e) => {
        onChangeRadio(e);
    }

    return (
        <div className="custom-radio">
            <input type="radio" id={id} name={name} value={value} checked={checked} disabled={disabled} onChange={handleChange} />
            <label htmlFor={id}>{label}</label>
        </div> 
    );
};

export default RadioButton;