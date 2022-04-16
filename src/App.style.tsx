import style, { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: #2C2C2C;
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
`;

export const TitleContainer = styled.div`
    padding: 1%;
`;

export const DetailPageContainer = styled.div`
    
`;
