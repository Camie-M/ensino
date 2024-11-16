import styled from 'styled-components';

export const ContainerText = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    justify-content: space-around;
`;


export const Title = styled.h1`
    font-size: clamp(1.5rem, 5vw , 2rem); 
    /* font-size: 1.5rem; */
    color: ${(props) => props.theme.colors.titles};
`;
export const Data = styled.h2`
    font-size: clamp(0.9rem, 5vw , 1.5rem); 
    /* font-size: 0.9rem;    */
    color: ${(props) => props.theme.colors.authors};
`;
export const Text = styled.p`
    font-size: clamp(1rem, 5vw , 1.2rem); 
    /* font-size: 1rem; */
    color: ${(props) => props.theme.colors.text};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: auto;
    overflow: hidden;
    text-overflow: ellipsis;

`;