import { isAdmin } from "../../services/auth";
import { Container } from "./styles";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useLesson } from "../../hooks/useLesson";
import { useState } from "react";
import { UpdateLessonModal } from "./UpdateLessonModal";

interface LessonState {
    name: string;
    id: string;
    event_date: string;
}

export function Lesson({ name, id, event_date}: LessonState) {
    const { deleteLesson } = useLesson();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    const watchVideo = () => {
        const searchQuery = name.replaceAll(" ", "+");
        window.open("https://www.youtube.com/results?search_query=" + searchQuery);
    }

    const removeLesson = async (id: string) => {
        await deleteLesson(id);
        window.location.reload();
    }

    return (
        <Container>
            <div>
                <h4>{name}</h4>
                <div>
                    <button onClick={watchVideo} className="watch">Assistir</button>
                    {isAdmin() ? (
                        <>
                            <button className="admRemove" onClick={() => removeLesson(id)}><FaTrash /></button>
                            <button onClick={handleModalOpen} className="admEdit"><FaEdit /></button>
                        </>
                    ) : false}
                </div>
            </div>
            <UpdateLessonModal 
                isOpen={isModalOpen}
                handleModalClose={handleModalClose}
                lesson_id={id}
                name={name}
                event_date={event_date}
            />
        </Container>
    )
}