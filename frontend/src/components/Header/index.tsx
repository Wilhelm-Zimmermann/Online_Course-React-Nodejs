import { useState } from "react";
import { isAdmin } from "../../services/auth";
import { CreateModuleModal } from "./CreateModuleModal";
import { Container, Content } from "./styles";

export function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
        toggleMenu();
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const toggleMenu = () => {
        const menu = document.getElementById("nav");
        menu.classList.toggle("active");
    }

    return (
        <Container>
            <Content>
                <h1>devaria</h1>
                <nav id="nav">

                    <button aria-label="Abrir menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false" id="mobile-btn" 
                    onClick={toggleMenu}>
                        <span id="hamburger"></span>
                    </button>

                    <ul id="nav_menu" className="menu">
                        <li className="menu-item"><a href="/signup">Criar Conta</a></li>
                        <li className="menu-item"><a href="/login">Login</a></li>
                        {isAdmin() ? (
                            <li className="menu-item">
                            <button onClick={handleModalOpen}>Novo Módulo</button>
                            </li>
                        ): 
                        false}
                    </ul>
                    
                    
                    <CreateModuleModal 
                        isOpen={isModalOpen}
                        handleModalClose={handleModalClose}
                    />
                </nav>
            </Content>
        </Container>
    )
}