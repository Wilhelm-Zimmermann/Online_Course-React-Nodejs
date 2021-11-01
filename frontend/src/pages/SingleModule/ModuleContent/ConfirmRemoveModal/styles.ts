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

    h2 {
        margin-top: 1rem;
    }

    .remove_btn {
        background: #cc3f3f;
    }

    .cancel_btn {
        background: #3753de;
    }
    
`