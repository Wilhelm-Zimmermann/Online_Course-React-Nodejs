import { Link } from "react-router-dom";
import { useModules } from "../../hooks/useModules";
import { Module } from "./Module";
import { Container, Content } from "./styles";

export function ModuleContainer() {
    const {modules} = useModules();
    
    return (
        <Container>
            <Content>
                <h1>Módulos</h1>
                <h3 id="alfa">Selecione um módulo para ver as aulas diponíveis</h3>
                <div className="module-container">
                    {modules.length === 0 ?  (
                        <h1>Não há módulos disponiveis</h1>
                    ): modules.map(module => (
                        <Link key={module.id} to={`/module/${module.id}`}>
                            <Module key={module.id} name={module.name} id={module.id}/>
                        </Link>
                    ))}
                </div>
            </Content>
        </Container>
    )
}