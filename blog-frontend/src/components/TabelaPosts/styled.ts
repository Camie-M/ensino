import styled from 'styled-components';

export const Tabela = styled.table`
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 0.5rem;
    box-shadow: 0.05rem 0.1rem 0.2rem rgba(0, 0, 0, 0.15);
    overflow: hidden;
`;


export const Thead = styled.thead`
    background-color: ${(props) => props.theme.colors.backgroundTableHeader};
`;
export const Tbody = styled.tbody`
  background-color: ${(props) => props.theme.colors.backgroundTableBody};
`;
export const Tfoot = styled.tfoot`
  
`;
export const Tr = styled.tr`
   cursor: pointer;
   &:hover{
    background-color:rgb(242, 242, 242)
   }
   
`;

export const Th = styled.th`
    font-size: clamp(1rem, 5vw , 1.2rem); 
    padding: 1rem;
    color: ${(props) => props.theme.colors.titles};
`;
export const Span = styled.span`
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    max-width: 80%;
    line-height:1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
`;
export const Td = styled.td`
    text-align:center;
    font-size: clamp(1rem, 5vw , 1.2rem); 
    padding: 1rem;
    color: ${(props) => props.theme.colors.text};
    &:last-child{
      display:flex;
      gap:1rem;
    }
`;
export const Anchor = styled.p`
    text-align: center;
    color: ${(props) => props.theme.colors.text};
    font-size: clamp(1rem, 5vw, 1.2rem); 
    padding: 1rem;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colors.hoverAnchor};
    }
    &:nth-last-child(1){
        color: red;
        &:hover {
            color: #900c3f;
        }
    }
`;




