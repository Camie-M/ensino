import styled from 'styled-components';
interface ContainerProps {
    type: string;
}

export const Container = styled.div<ContainerProps>`
    display:flex;
    flex-direction: ${(props) => props.type === 'column' ? 'column' : 'row'};
    gap:1rem;
    width:100%;
    @media only screen and (max-width: 800px) {
        flex-wrap:wrap;
    }
`;




