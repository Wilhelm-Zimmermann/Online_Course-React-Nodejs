import styled from "styled-components";

export const Container = styled.div`
    max-width: 900px;
    margin: 8rem auto;
    padding: 0 2rem;
    display:flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 900px) {
        flex-direction: column;
        margin: 0 auto;
        margin-top: 3rem;
        .left-side {
            margin-bottom: 2rem;
            h2 {
                text-align: center;
                margin-top: 1rem;
            }
        }
    }

    .left-side {
        h1 {
            font-size: 4rem;
        }

        h2 {
            font-size: 3rem;
            margin-top: 1rem;
            color: #4f54e3;
            position:relative;

            &::after{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 3rem;
                height: 3px;
                background: #4f54e3;
            }
        }
    }
`

export const Form = styled.form`    
    max-width: 450px;
    padding: 2rem;
    border-radius: 0.25rem;
    background: #202024;
    flex: 1;

    h1 {
        text-align: center;
    }

    .form-input {
        width: 100%;
        height: 3rem;
        border: 0;
        border-radius: 0.25rem;
        margin-top: 1rem;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        background: #121214;

        &:hover{
            border: 2px solid #4f54e3;
        }
    }

    input {
        width: 90%;
        height: 2rem;
        padding: 0 1rem;
        border: 0;
        border-radius: 0.25rem;
        color: white;
        background: #121214;

        &:focus{
            outline:0;
        }
    }

    svg{
        width: 1rem;
        height: 1rem;
        color: #2b2b30;
        margin: 0 auto;
    }

    button {
        display: block;
        width: 260px;
        height: 3rem;
        border:0;
        border-radius: 0.25rem;
        margin: 0 auto;
        margin-top:1rem;
        background: #4f54e3;
        color: white;
        font-weight: bolder;
        font-size: 1.2rem;

        transition: filter 0.2s;
        &:hover {
            filter: brightness(0.6);
        }
    }

    a {
        display: block;
        margin-top: 1rem;
        text-align: center;
        text-decoration: underline;
        color: #40c99a;
    }

    .new-user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;

        a {
            color: #40c99a;
            text-decoration: underline;
        }
    }
`