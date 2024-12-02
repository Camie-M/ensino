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
    &:hover{
        background-color:${(props) => props.theme.colors.backgroundTableBody};
    }


    @media (max-width: 800px) {
        flex-wrap:wrap;
        /* gap:1r:; */
    }
`;




