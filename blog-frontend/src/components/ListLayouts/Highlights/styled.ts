import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    gap:0.5rem;
    width:100%;
`;

export const ContainerAbove = styled.div`
    display:inline-flex;
    gap:0.5rem;
    width:100%;
    @media (max-width: 1024px) {
        flex-direction: column;
    }
`;

export const LeftContent = styled.div`
    width:50%;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;
export const RightContent = styled.div`
    display:flex;
    flex-direction:column;
    width:50%;
    gap:0.5rem;
    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const ContainerBottom = styled.div`
    width:100%; 
    @media (max-width: 1024px) {
        &>:last-child{
        flex-direction:column
        }
    }`;





