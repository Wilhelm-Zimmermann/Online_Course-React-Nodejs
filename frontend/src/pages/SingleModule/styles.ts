import styled from "styled-components";

export const Container = styled.div`
    button {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        width: 4rem;
        height: 4rem;
        border: 0;
        border-radius: 50%;
        background: #343deb;
        color: white;
        font-size: 3rem;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.4);
        }
    }
`