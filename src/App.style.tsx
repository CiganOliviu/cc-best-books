import style, { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: #0d0d0d;
        color: #fff;
        padding: 1%;
    }
`;

export const TableTitle = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 24px;
    
    :hover {
        color: #477AFF;
    }
`;

export const ContentParagraph = styled.p`
    color: #fff;
    font-size: 18px;
    font-weight: 700;
`;

export const TitleContainer = styled.div`
    padding: 1%;
`;

export const InputContainer = styled.input`
    width: auto;
    padding: 0.5%;
    font-size: 20px;
    border-radius: 5%;
    background: #2C2C2C;
    color: #fff;
  
    :focus {
      color: #477AFF;
      border-color: #477AFF;
    }
`;

export const DetailPageContainer = styled.div`
    padding: 2%;
`;
