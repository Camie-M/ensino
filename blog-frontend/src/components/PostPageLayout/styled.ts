import styled from 'styled-components'

export const Container = styled.div`
   width:100%;
`
export const Title = styled.h1`
     font-size: clamp(1.2rem, 5vw, 1.3rem); 
    font-weight:500;
    /* font-size: 1.5rem; */
    color: ${(props) => props.theme.colors.titles};
`
export const Data = styled.p`
    font-size: clamp(0.5rem, 5vw , 0.9rem); 
    font-weight:600;
    /* margin-top:0.8rem; */
    /* font-size: 0.9rem;    */
    color: ${(props) => props.theme.colors.authors};
`
export const imgContainer = styled.div`
   
`
export const Content = styled.p`
   font-size: clamp(1rem,5vw , 1.1rem); 
    /* font-size: 1rem; */
    color: ${(props) => props.theme.colors.text};
`