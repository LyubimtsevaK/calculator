import React from 'react';

const InputNumber = ({ value, buttonNumber }) => {
    const handleChange = (event) => {
    const newValue = event.target.value;
    buttonNumber(newValue);
    console.log(typeof(buttonNumber(newValue)));
    }
    return (
        <div>
            <input 
                className='input'
                type="text"
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

export default InputNumber;