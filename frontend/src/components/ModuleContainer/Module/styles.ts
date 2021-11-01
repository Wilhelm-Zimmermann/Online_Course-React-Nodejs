import styled from "styled-components";

export const Container = styled.div`
    height: 9rem;
    background: #2c2c33;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    transition: border 0.2s;

    &:hover {
        outline: 2px solid #42eb6f;
    }

    .title {
        width: 8rem;
    }

    h3 {
        font-weight: bolder;
        color: #9e9ee6;
    }

    p {
        margin-top: 1rem;
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