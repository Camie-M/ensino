import React from 'react'

import * as S from "./styled"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    type: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    return (
        <S.Button {...props}>
            {label}
        </S.Button>
    )
}

export default Button