import styled from 'styled-components'
interface ToggleThemeProps {
    $isactive: boolean;
}
export const ToggleTheme = styled.div`
    background-color: ${props => props.theme.colors.titles};
    border: 1px solid ${props => props.theme.colors.background};
    padding: 0.5rem 1rem;
    border-radius: 30px;
    display: flex;
    gap: 1rem;
    cursor: pointer;
    position:relative;
`
export const ToggleButton = styled.div<ToggleThemeProps>`
    width: 24px;
    height: 24px;
    background-color: ${props => props.theme.colors.background};
    border-radius: 50%;
    position: absolute;
    right: ${props => (props.$isactive ? '41%' : '81px')};
    transform: translateX(100%);
    transition: right 0.3s ease;
`;
