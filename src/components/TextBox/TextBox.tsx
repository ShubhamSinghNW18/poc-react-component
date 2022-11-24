import React from "react";

export interface TextBoxProps {
    type: string;
    className: string;
    onClick: Function;
    placeHolder: string;
    onChange: Function;
    value: string;
}

const Button = (props: TextBoxProps) => {
    return <input
        type={props.type}
        className={props.className}
        placeholder={props.placeHolder}
        onChange={() => { props.onChange() }}
        value = {props.value}    
    />
};

export default Button;