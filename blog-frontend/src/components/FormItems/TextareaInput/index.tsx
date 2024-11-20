import type { FunctionComponent } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import * as S from "./styled"

type Props = {
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    defaultValue?: string;
    required?: boolean;
    label: string;
    id: string;
}

const TextareaInput: FunctionComponent<Props> = ({
    placeholder,
    register,
    defaultValue,
    required,
    label,
    id
}) => {
    return (
        <S.TextareaInput>
            <label htmlFor={id}>{label}</label>
            <textarea
                {...register(id, { required: required })}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
                id={id}
                rows={33}
            />
        </S.TextareaInput>
    )
}

export default TextareaInput