import React from "react";
import './Button.css';

export const Button = (props) => {

    const className = `space click ${props.data.form} ${props.data.color}`;
    if(props.data.form === 'oval'){
        return (
            <div
                className={className}
                onClick={()=> props.getChar(
                    props.data.val
                )}
            >
                <span className='val'>{props.data.val}</span>
            </div>
        )
    }else {
        return (
            <div
                className={className}
                onClick={()=> props.getChar(
                    props.data.val
                )}
            >
                <span className='val'>{props.data.val}</span>
            </div>
        )
    }
}