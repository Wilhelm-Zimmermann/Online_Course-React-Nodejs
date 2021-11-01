import Modal from "react-modal";
import { Container } from "./styles";
import { FormEvent} from "react";
import { useModules } from "../../../../hooks/useModules";


interface ModalProps {
    isOpen: boolean;
    handleModalClose: () => void;
    module_id: string;
}

export function ConfirmRemoveModal({ isOpen, handleModalClose, module_id }: ModalProps) {
    const { deleteModule } = useModules();

    const handleRemoveModule = async (e: FormEvent) => {
        e.preventDefault();
        await deleteModule(module_id);

        window.location.href = "/";
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
            <Container>
                <h1>Removendo o módulo serão removidas todas as aulas dentro do mesmo</h1>
                <h2>Deseja Prosseguir com a ação?</h2>
                <button className="remove_btn" onClick={handleRemoveModule}>SIM</button>
                <button className="cancel_btn" onClick={handleModalClose}>NÃO</button>
            </Container>
        </Modal>
    )
}