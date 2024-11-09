import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    width: 100%;
    height:10rem;
    background-color: transparent;
`;
export const img = styled.img`
    width: 100%;
    height:10rem;
`;
export const Title = styled.h1`
    font-size:${(props) => props.theme.fontSizes.h1};
`;
export const Data = styled.h2`
    font-size:${(props) => props.theme.fontSizes.h2};
`;
export const Text = styled.p`
    font-size:${(props) => props.theme.fontSizes.p};
`;


