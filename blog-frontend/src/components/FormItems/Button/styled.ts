import styled from 'styled-components'

export const Button = styled.button`
    padding: 1rem;
    background-color: ${props => props.theme.colors.authors};
    border: 1px solid ${props => props.theme.colors.background};
    border-radius: 6px;
    color: ${props => props.theme.colors.background};
    font-size: 16px;
    width: 25%;
    cursor: pointer;
`