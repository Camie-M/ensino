import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center; 
    padding: 1rem; 
`;

export const dropDownField = styled.div`
    border: 0.1rem dashed ${(props) => props.theme.colors.border || '#000'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 10rem;
    width: 100%; 
    border-radius: 0.5rem;
`;

export const Title = styled.h2`
    font-size: clamp(1rem, 5vw, 1.5rem);
    color: ${(props) => props.theme.colors.titles};
    text-align: center; 
    margin: 0.5rem 0;
`;

export const InputFile = styled.input`
    font-size: clamp(0.8rem, 5vw, 1rem); 
    color: ${(props) => props.theme.colors.titles};
    cursor: pointer;
    margin-top: 0.5rem;
`;
export const ImgPreviewContainer = styled.div`
    
`;
export const PreviewContainer = styled.img`
    
`;
