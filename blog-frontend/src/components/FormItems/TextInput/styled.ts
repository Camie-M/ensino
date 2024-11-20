import styled from 'styled-components'

export const TextInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
        color: ${props => props.theme.colors.titles};
    }

    input {
        padding: 0.5rem;
        border: 1px solid ${props => props.theme.colors.border};
        border-radius: 4px;
    }
`