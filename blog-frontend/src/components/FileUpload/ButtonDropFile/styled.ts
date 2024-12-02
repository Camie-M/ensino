import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
`;

export const Label = styled.label`
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 0.4rem;
    cursor: pointer;
    margin-right: 0.6rem;
    font-size: clamp(0.5rem, 4vw, 1rem);
    &:hover {
        background-color: #0056b3;
    }
`;

export const HiddenInput = styled.input`
    display: none;
`;

export const FileName = styled.span`
    font-size: clamp(1rem, 5vw, 1rem);
    color: ${(props) => props.theme.colors.titles};
    color: #333;
`;
