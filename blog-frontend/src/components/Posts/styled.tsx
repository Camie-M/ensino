import styled from 'styled-components';
interface ContainerProps {
    type: string;
}

export const ContainerAnchor = styled.a<ContainerProps>`
    display:flex;
    flex-direction: ${(props) => props.type === 'column' ? 'column' : 'row'};
    gap:2rem;
    width:100%;
    cursor: pointer;
    border-radius:0.8rem;
    padding:1rem;
    &:hover{
        background-color:${(props) => props.theme.colors.backgroundTableBody};
    }


    @media (max-width: 800px) {
        flex-wrap:wrap;
        padding:0rem;
        /* gap:1r:; */
    }
`;




