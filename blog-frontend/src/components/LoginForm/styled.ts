import styled from 'styled-components'

export const div = styled.div`
    width:80%;
`
export const Title = styled.h1`
    text-align:center;
    color: ${props => props.theme.colors.titles};
    font-family:${props => props.theme.fonts.primary};
    font-size:2.5rem;
    font-size: clamp(1.5rem, 5vw , 2.5rem);
`

export const Aviso = styled.p`
    text-align:center;
    color: ${props => props.theme.colors.titles};
    font-family:${props => props.theme.fonts.primary};
    font-size: clamp(0.8rem, 5vw , 1rem);
    margin-bottom: 3rem;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap:1rem;
`

export const Button = styled.button`
    padding: 1rem;
    background-color: #090d1f;
    border: 1px solid #090d1f;
    border-radius: 6px;
    color: #fff;
    font-size: clamp(0.5rem, 5vw , 1rem);
    width: 100%;
    cursor: pointer;
`

