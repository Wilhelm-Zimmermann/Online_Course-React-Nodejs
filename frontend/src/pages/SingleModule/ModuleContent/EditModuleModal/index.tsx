import Modal from "react-modal";
import { Container } from "./styles";
import { FormEvent, useState} from "react";
import { useModules } from "../../../../hooks/useModules";
import { FaEdit, FaPencilAlt } from "react-icons/fa";


interface ModalProps {
    isOpen: boolean;
    handleModalClose: () => void;
    module_id: string;
    name: string;
}

export function EditModuleModal({ isOpen, handleModalClose, module_id, name }: ModalProps) {
    const { updateModule } = useModules();
    const [ formName, setFormName ] = useState(name);
    

    const handleEditModule = async (e: FormEvent) => {
        e.preventDefault();
        await updateModule({
            id: module_id,
            name: formName
        });

        window.location.reload();
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
                <h2>Editar módulo</h2>
                <div className="form-input">
                    <FaPencilAlt />
                    <input type="text" value={formName} onChange={e => setFormName(e.target.value)}/>
                </div>
                <button className="edit_btn" onClick={handleEditModule}>
                    Editar
                </button>
            </Container>
        </Modal>
    )
}