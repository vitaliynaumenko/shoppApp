import React from 'react';

interface IButtonProps {
    children: React.ReactNode
    classes: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({...props}) => {
    return (
        <button className={props.classes?? ''} type={props.type? props.type : "button"} {...props}>{props.children}</button>
    );
}

export default Button;