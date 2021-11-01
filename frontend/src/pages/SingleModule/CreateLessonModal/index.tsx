import Modal from "react-modal";
import { Container } from "./styles";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { useLesson } from "../../../hooks/useLesson";

interface ModalProps {
    isOpen: boolean;
    handleModalClose: () => void;
    module_id: string;
}

export function CreateLessonModal({ isOpen, handleModalClose, module_id }: ModalProps) {
    const { createLesson } = useLesson();
    const [ name, setName ] = useState("");
    const [ date, setDate ] = useState("");
    const [ error, setError ] = useState([]);

    const handleAddNewLesson = async (e: FormEvent) => {
        e.preventDefault();

        const eDate = new Date(date).getTime();
        const now = new Date().getTime();

        if(name === "" || date === "") {
            setError([
                "Não pode haver campos vazios"
            ]);
            return false;
        }

        if(eDate < now) {
            setError([
                "A data do evento deve ser no mínimo 24 horas no futuro"
            ]);
            return false;
        }

        try {

            await createLesson({
                name,
                event_date: date,
                module_id
            });
        }catch {
            console.log("OPS");
        }

        window.location.reload();

        setName("");
        setDate("");
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
                <h1>Criar Nova aula</h1>
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
                <div className="form-input">
                    <FaCalendarAlt />
                    <input 
                        type="date" 
                        value={date} 
                        placeholder="Data" 
                        onChange={e => setDate(e.target.value)}
                    />
                </div>
                    <input type="submit" value="Criar" />
            </Container>
        </Modal>
    )
}