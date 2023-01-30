import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    
    }

    .App{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        gap: 8.1rem;
        justify-content: space-between;
        
    }
`;
