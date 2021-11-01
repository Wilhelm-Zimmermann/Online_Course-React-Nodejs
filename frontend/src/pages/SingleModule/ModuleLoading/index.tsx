import { LessonLoading } from "../../../components/LessonLoading";
import { Container, LessonContainer } from "./styles";

export function ModuleLoading() {
    return (
        <Container>
            <h1> .</h1>
            <h3> .</h3>
            <LessonContainer>
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
                    <LessonLoading />
            </LessonContainer>
        </Container>
    )
}