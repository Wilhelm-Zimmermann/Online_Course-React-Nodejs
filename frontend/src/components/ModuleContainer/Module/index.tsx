import { useEffect, useState } from "react";
import { useModules } from "../../../hooks/useModules";
import { Circle, Container } from "./styles";

interface ModuleProps {
    id: string;
    name: string;
}

export function Module({ id, name }: ModuleProps) {
    const { countLessonsInModule } = useModules();
    const [ lessonCount, setLessonCount ] = useState(0);

    const countLessons = async (id: string) => {
        const quantity = await countLessonsInModule(id);
        setLessonCount(quantity);
    }

    useEffect(() => {
        countLessons(id);
    }, [countLessons, id])

    return (
        <Container key={id}>
            <div className="title">
                <h3>{name}</h3>
                <p>{lessonCount}/{lessonCount} aulas</p>
            </div>
            <Circle><span>100%</span></Circle>
        </Container>
    )
}