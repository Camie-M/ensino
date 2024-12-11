import type { FunctionComponent } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import * as S from "./styled";

type Props = {
    placeholder: string;
    register: UseFormRegister<FieldValues>;
    defaultValue?: string;
    required?: boolean;
    label: string;
    id: string;
    type?: string;
};

const TextInput: FunctionComponent<Props> = ({
    placeholder,
    register,
    defaultValue,
    required,
    label,
    id,
    type = "text",
}) => {
    return (
        <S.TextInput>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                {...register(id, { required: required })}
                placeholder={placeholder}
                defaultValue={defaultValue}
                required={required}
                id={id}
            />
        </S.TextInput>
    );
};

export default TextInput;
