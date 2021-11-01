import styled from "styled-components";

export const Container = styled.header`
    background: #202024;
    width: 100%;
    height: 6rem;
`

export const Content = styled.div`
    max-width: 1080px;
    height: 6rem;
    padding: 0 2rem;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
        color: white;
        font-weight: lighter;
    }

    #nav_menu {
        display: flex;
        align-items: center;
        justify-content: space-around;
        
        li {
            list-style: none;
        }

        .menu-item {
            margin: 0 0.5rem;

        }
    }

    button {
        border:0;
        border-radius: 0.25rem;
        padding: 0.6rem;
        background: #343deb;
        color: white;
    }

    #mobile-btn{
        display: none;
    }

    @media (max-width: 600px) {
        #nav_menu{
            position: absolute;
            margin:0;
            width: 100%;
            top: 6rem;
            right:0;
            background: #202024;
            display: block;
            z-index: 10000;
            height: 0;
            transition: .6s;
            visibility: hidden;
            overflow-y: hidden;
            
            li{
                padding: 1rem 0;
            }
            li a {
                margin: 0 1rem;
                border-bottom: 1px solid white;
            }

            li button {
                margin: 0 1rem;
            }
        }
        

        #nav.active #nav_menu {
            display: block;
            height: 100vh;
            visibility: visible;
            overflow-y: auto;
        }

        #mobile-btn {
            display: flex;
            padding: .5rem 1rem;
            font-size: 1rem;
            border: none;
            background: none;
            gap: .5rem;
        }

        #hamburger {
            width: 20px;
            border-top: 2px solid;
        }

        #hamburger::after, #hamburger::before{
            content: "";
            display: block;
            width:20px;
            height: 2px;
            background: white;
            margin-top: 5px;
            transition: .6s;
            position: relative;
        }

        #nav.active #hamburger {
            border-top-color: transparent;
        }

        #nav.active #hamburger::before{
            transform: rotate(135deg);
        }

        #nav.active #hamburger::after {
            transform: rotate(-135deg);
            top: -7px;
        }
    }
`