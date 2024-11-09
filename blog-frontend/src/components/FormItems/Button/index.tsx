import React from 'react'
import { useFormContext } from 'react-hook-form'

import * as S from "./styled"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    type: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
    const {
        formState: { isSubmitting }
    } = useFormContext();

    return (
        <S.Button {...props} disabled={isSubmitting}>
            {label}
        </S.Button>
    )
}

export default Button