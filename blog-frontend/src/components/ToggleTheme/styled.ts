import styled from 'styled-components'

export const ToggleTheme = styled.div`
    background-color: ${props => props.theme.colors.titles};
    padding: 0.5rem 1rem;
    border-radius: 30px;
    display: flex;
    gap: 1rem;
    cursor: pointer;

    #toggle-switch {
        width: 24px;
        height: 24px;
        background-color: ${props => props.theme.colors.background};
        border-radius: 50%;
    }
`