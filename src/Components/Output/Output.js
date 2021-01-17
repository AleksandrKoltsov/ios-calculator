import React from "react";
import './Out.css';

export const Output = (props) => {
    const char = props.data;
    return (
        <div className='out'>
            <span className='text'>{char || '0'} </span>
        </div>
    )
}