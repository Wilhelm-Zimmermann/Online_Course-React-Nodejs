import styled from "styled-components";


export const Container = styled.footer `
    min-height: 8rem;
    border-top: 1px solid #606078;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 540px) {
        flex-direction: column;

        .author{
        h2{
            margin-top: 1rem;
        }

        .social {
            margin-top: 1rem;
        }
    }
    }

    .author{
        h2{
            margin-bottom: 1rem;
        }
    }

    .linkedin {
        color: #1a5ee8;
    }

    .mail {
        color: #a4a1c2;
    }

    .social{    
        
        svg{
            width: 2rem;
            height: 2rem;
            cursor: pointer;
            
            & + svg {
                margin-left: 1rem;
            }
        }
    }
`