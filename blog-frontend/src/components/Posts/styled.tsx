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
export const ContainerImg = styled.div`
width:100%;
`;
export const ContainerText = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    justify-content: space-around;
`;

export const img = styled.img`
    width: inherit;
    height: 10rem;
    object-fit: cover;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.titles};
`;
export const Data = styled.h2`
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.authors};
`;
export const Text = styled.p`
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    max-width: auto;
    overflow: hidden;
    text-overflow: ellipsis;

`;


