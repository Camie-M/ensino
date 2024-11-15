import styled from 'styled-components'

export const Hero = styled.div`
    color: ${props => props.theme.colors.titles};
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    font-family: Inter;
    font-size: 15rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 2rem 0;
    text-align: center;
`