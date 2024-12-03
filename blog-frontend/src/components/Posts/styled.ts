import styled from 'styled-components';
interface ContainerProps {
    type: string;
}

export const ContainerAnchor = styled.a<ContainerProps>`
    display: flex;
    flex-direction: ${(props) => (props.type === "column" ? "column" : "row")};
    gap: 1.5rem;
    width: 100%;
    /* height: 100%; */
    cursor: pointer;
    border-radius: 0.8rem;
    padding: 1rem;
   &:hover{
    background: ${(props) => props.theme.colors.background};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   }


    @media (max-width: 800px) {
        flex-wrap:wrap;
        padding:1rem;
        /* gap:1r:; */
    }
`;



