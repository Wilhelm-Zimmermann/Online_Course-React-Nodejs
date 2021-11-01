import styled from "styled-components";

export const Container = styled.div`
    margin: 6rem 0;
    width: 100%;
     @media screen and (max-width: 650px) {
        grid-template-columns: 1fr;
        h1{
            text-align:center;
        }
        
        #alfa {
            text-align:center;
        }
    };
`

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1rem;

    .module-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.2rem;
        margin-top: 3rem;
        
        @media screen and (max-width: 1080px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media screen and (max-width: 650px) {
            grid-template-columns: 1fr;
        };
    }

    h3 {
        font-weight: lighter;
        color: #dcdcf7;
    }
`

export const Circle = styled.div`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.4rem solid #42eb6f;
    display: flex;
    align-items: center;
    justify-content: center;
`