import styled from "styled-components";


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    margin-top: 5rem;

    h1{
        color: #cbcbd1;
    }

    h3 {
        margin-top: 1rem;
        font-weight: lighter;
        color: #5656e8;

        position: relative;

        &::after {
            content: "";
            position: absolute;
            bottom: -1rem;
            left:0;

            height: 2px;
            width:5rem;
            background: #5656e8;
        }
    }

    .adm_edit-module{
        border:0;
        color: white;
        height: 5rem;
        font-size: 1.7rem;
        background: inherit;
        position: relative;
        padding: 1rem 2rem 1rem 0;

        width: 50%;
        border-bottom: 1px solid white;
        cursor: pointer;

        &:hover {
            outline: 1px solid red;
            border-radius: 0.25rem;
        }
        &:focus {
            outline: 0;
        }
    }

    .adm_edit-module_button{
        border: 0;
        background: #25b864;
        padding: 0.4rem;
        border-radius: 0.25rem;
        margin-top: 1rem;
        svg{
            color: white;
        }
    }

    .adm_remove-module_button{
        margin-left: 1rem;
        margin-top: 1rem;
        border: 0;
        background: #e03f3f;
        padding: 0.4rem;
        border-radius: 0.25rem;
        svg{
            color: white;
        }
    }
`
export const LessonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 2rem 0;
`