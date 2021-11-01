import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Header } from "../../components/Header";
import { ModuleState, useModules } from "../../hooks/useModules";
import { CreateLessonModal } from "./CreateLessonModal";
import { ModuleContent } from "./ModuleContent";
import { ModuleLoading } from "./ModuleLoading";
import { Container } from "./styles";

interface SingleModuleRouterProps {
    id: string;
}
interface SingleModuleProps extends RouteComponentProps { }


export function SingleModule(props: SingleModuleProps) {
    const { getOneModule } = useModules();
    const [module, setModule] = useState<ModuleState>();
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { id } = props.match.params as SingleModuleRouterProps;

    const handleModalOpen = () => {
        setIsModalOpen(true);
    }

    const handleModalClose = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {

        const getModule = async (id: string) => {
            setLoading(true);
            getOneModule(id).then(res => {
                setModule(res)
                setLoading(false);
            });
        }
        getModule(id);
    }, []);

    return loading ? (
        <>
        <Header />
        <ModuleLoading />
        </>
    ) : (
        <>
            <Header />
            <ModuleContent name={module.name} id={module.id} />
            <CreateLessonModal 
                key={module.id}
                isOpen={isModalOpen}
                handleModalClose={handleModalClose}
                module_id={module.id}
            />
            <Container>
                <button onClick={handleModalOpen}>+</button>
            </Container>
        </>
    )
}