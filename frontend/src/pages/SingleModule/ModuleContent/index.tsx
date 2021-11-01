import { useEffect, useState } from "react";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { Lesson } from "../../../components/Lesson";
import { useLesson } from "../../../hooks/useLesson";
import { isAdmin } from "../../../services/auth";
import { ConfirmRemoveModal } from "./ConfirmRemoveModal";
import { EditModuleModal } from "./EditModuleModal";
import { Container, LessonContainer } from "./styles";

interface ModuleContentProps{
    id: string;
    name: string;
}

export function ModuleContent({ name, id }: ModuleContentProps) {
    const [ isRemoveModalOpen, setIsRemoveModalOpen ] = useState(false);
    const [ isEditModalOpen, setIsEditModalOpen ] = useState(false);
    const { lessons, findLessonsPerModule } = useLesson();

    const findLessons = async () => {
        await findLessonsPerModule(id);
    }

    const handleOpenRemoveModal = () => {
        setIsRemoveModalOpen(true);
    }
    
    const handleCloseRemoveModal = () => {
        setIsRemoveModalOpen(false);
    }

    const handleOpenEditModal = () => {
        setIsEditModalOpen(true);
    }
    
    const handleCloseEditModal = () => {
        setIsEditModalOpen(false);
    }

    useEffect(() => {
        findLessons();
    }, [])

    return (
        <Container>
            <h1>{name}</h1>
            {isAdmin() ? (
                <>
                    <button className="adm_edit-module_button" onClick={handleOpenEditModal}><FaPencilAlt /></button>
                    <button className="adm_remove-module_button" onClick={handleOpenRemoveModal}><FaTrashAlt /></button>
                    <ConfirmRemoveModal 
                        isOpen={isRemoveModalOpen}
                        handleModalClose={handleCloseRemoveModal}
                        module_id={id}
                    />

                    <EditModuleModal 
                        isOpen={isEditModalOpen}
                        handleModalClose={handleCloseEditModal}
                        module_id={id}
                        name={name}
                    />
                </>
            ) : false}
            <h3>Aulas disponíveis neste módulo</h3>
            <LessonContainer>
                {lessons.length === 0 ? (
                    <h2>Não hã aulas disponíveis neste módulo</h2>
                ): lessons.map(lesson => (
                    <Lesson key={lesson.id} name={lesson.name} id={lesson.id} event_date={lesson.event_date} />
                ))}
            </LessonContainer>
        </Container>
    )
}