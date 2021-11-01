import Modal from "react-modal";
import { Container } from "./styles";
import { FaBook, FaCalendarAlt } from "react-icons/fa";
import { FormEvent, useState } from "react";
import { useLesson } from "../../../hooks/useLesson";

interface ModalProps {
    isOpen: boolean;
    handleModalClose: () => void;
    lesson_id: string;
    name: string;
    event_date: string;
}

export function UpdateLessonModal({ isOpen, handleModalClose, lesson_id, name, event_date }: ModalProps) {
    const { updateLesson } = useLesson();
    const [ nameForm, setNameForm ] = useState(name);
    const [ date, setDate ] = useState(event_date.split("T")[0].replaceAll("-","/"));
    const [ error, setError ] = useState([]);

    const handleAddNewLesson = async (e: FormEvent) => {
        e.preventDefault();

        const eDate = new Date(date).getTime();
        const now = new Date().getTime();

        if(nameForm === "" || date === "") {
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

        await updateLesson({
            name: nameForm,
            event_date: date,
            id: lesson_id
        })

        window.location.reload();

        setNameForm("");
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
                <h1>Editar Aula</h1>
                {error.map(err => (
                    <p key={err}>* {err}</p>
                ))}
                <div className="form-input">
                    <FaBook />
                    <input 
                        type="text" 
                        value={nameForm} 
                        placeholder="Nome"
                        onChange={e => setNameForm(e.target.value)}
                    />
                </div>
                <span>Data: AAAA/MM/DD</span>
                <div className="form-input">
                    <FaCalendarAlt />
                    <input 
                        type="text" 
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