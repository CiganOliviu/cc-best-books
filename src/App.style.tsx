import style, { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: #2C2C2C;
        color: #fff;
        padding: 2%;
    }
`;

export const TableTitle = styled.a`
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    
    :hover {
        color: #477AFF;
    }
`;

export const TitleContainer = styled.div`
    padding: 1%;
`
