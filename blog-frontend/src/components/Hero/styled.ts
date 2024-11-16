import styled from 'styled-components'

export const Hero = styled.div`
    border-top: 1px solid ${props => props.theme.colors.border};
    border-bottom: 1px solid ${props => props.theme.colors.border};
    margin-bottom:1rem; 
`
export const Title = styled.h1`
    color: ${props => props.theme.colors.titles};
    font-family: Inter;
    font-size: clamp(4rem, 15vw , 20rem); 
    font-weight: 700;
    text-transform: uppercase;
    padding: 2rem 0;
    text-align: center;
`