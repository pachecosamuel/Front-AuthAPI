import { Modal, Spinner } from "react-bootstrap"
import ButtonComponent from "../button"

export const ModalComponent = ({ showModal, setShowModal, funcao, header, title, cancelText, acceptText }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton
                onClick={() => setShowModal(false)}
            >
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {header}
            </Modal.Body>
            <Modal.Footer>
                <ButtonComponent
                    tamanho="7rem"
                    bgColor="#585859"
                    textColor="#FFF"
                    acao={() => setShowModal(false)}
                > {cancelText}</ButtonComponent>

                <ButtonComponent
                    tamanho="10rem"
                    bgColor="#01a998"
                    textColor="#FFF"
                    acao={() => funcao()}
                >
                    {acceptText}
                </ButtonComponent>

            </Modal.Footer>
        </Modal>
    )
}