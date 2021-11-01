import styled from "styled-components";

export const Container = styled.form`
    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }

    .form-input {
        width: 100%;
        height: 3rem;
        border-radius: 0.25rem;
        background: #1a191c;

        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 1rem;

        svg {
            margin: 0 auto;
        }

        input {
            width: 90%;
            border:0;
            height: 3rem;
            border-radius: 0.25rem;
            background: #1a191c;
            color: white;
            padding:0 1rem;

            &:focus {
                outline: 0;
            }
        }
    }

    .modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        width: 1rem;
        height: 1rem;
        transition: filter 0.3s;

        &:hover{
            filter: brightness(0.5);
        }
    }

    input[type="submit"] {
        border:0;
        border-radius: 0.25rem;
        height: 3rem;
        width: 180px;
        display:block;
        margin: 0 auto;
        margin-top: 2rem;
        color: white;
        background: #5e3bdb;
        cursor:pointer;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.6);
        }
    }
    
    p {
        color: #eb4444;

        & + p {
            margin-bottom: 1rem;
        }
    }

    span {
        display: inline-block;
        margin-top: 1rem;
    }
`