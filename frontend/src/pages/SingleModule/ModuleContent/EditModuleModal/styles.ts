import styled from "styled-components";

export const Container = styled.form`
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

    button {
        margin-top: 1rem;
        padding: 0.5rem;
        border:0;
        border-radius: 0.25rem;
        color: white;

        & + button {
            margin-left: 1rem;
        }
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

    .edit_btn {
        width:180px;
        display: block;
        height: 3rem;
        color: white;
        background: #159450;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
    
`