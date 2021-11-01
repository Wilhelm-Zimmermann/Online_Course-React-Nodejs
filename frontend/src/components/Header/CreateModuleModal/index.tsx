import Modal from "react-modal";
import { Container } from "./styles";
import { FaBook } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { useModules } from "../../../hooks/useModules";

interface ModalProps {
    isOpen: boolean;
    handleModalClose: () => void;
}

export function CreateModuleModal({ isOpen, handleModalClose }: ModalProps) {
    const { createModule } = useModules();
    const [ name, setName ] = useState("");
    const [ error, setError ] = useState([]);

    const handleAddNewLesson = async (e: FormEvent) => {
        e.preventDefault();

        if(name === "") {
            setError([
                "Não pode haver campos vazios"
            ]);
            return false;
        }

        await createModule({
            name
        });

        window.location.reload();

        setName("");
    }

    return (
        <Modal
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="modal-close"
                onClick={handleModalClose}
            >X</button>
            <Container onSubmit={handleAddNewLesson}>
                <h1>Criar Novo Módulo</h1>
                {error.map(err => (
                    <p key={err}>* {err}</p>
                ))}
                <div className="form-input">
                    <FaBook />
                    <input 
                        type="text" 
                        value={name} 
                        placeholder="Nome"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                    <input type="submit" value="Criar" />
            </Container>
        </Modal>
    )
}