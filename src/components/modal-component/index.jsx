import { Modal, Spinner } from "react-bootstrap"
import ButtonComponent from "../button"

export const ModalComponent = ({ showModal, setShowModal, funcao, user, loading, title }) => {
    return (
        <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header closeButton
                onClick={() => setShowModal(false)}
            >
                <Modal.Title>Atenção</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {title}
            </Modal.Body>
            <Modal.Footer>
                <ButtonComponent
                    tamanho="7rem"
                    bgColor="#585859"
                    textColor="#FFF"
                    acao={() => setShowModal(false)}
                > Cancelar</ButtonComponent>
                {
                    loading ?
                        <ButtonComponent
                            tamanho="10rem"
                            bgColor="#01a998"
                            textColor="#FFF"
                            acao={() => funcao(user)}
                        >
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /></ButtonComponent>

                        :
                        <>

                            <ButtonComponent
                                tamanho="10rem"
                                bgColor="#01a998"
                                textColor="#FFF"
                                acao={() => funcao(user)}
                            >Salvar Alteração</ButtonComponent>
                        </>
                }

            </Modal.Footer>
        </Modal>
    )
}