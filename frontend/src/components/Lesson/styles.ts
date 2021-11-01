import styled from "styled-components";


export const Container = styled.div`
    height: 3.4rem;
    border-radius: 0.25rem;
    background: #2c2c33;
    padding: 0 1rem;

    &:hover{
        outline: 2px solid #5e3bdb;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 3rem;
    }

    button {
        border: 0;
        border-radius: 0.25rem;
        color: green;
        padding: 0.6rem;
        color: white;

        & + button {
            margin-left: 1rem;
        }
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.5);
        }
    }

    .watch{
        background: #5e3bdb;
    }

    .admEdit {
        background: #25b864;
    }

    .admRemove {
        background: #db3b3b;
    }
`