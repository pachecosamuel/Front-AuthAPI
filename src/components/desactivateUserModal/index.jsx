import { Modal, Spinner } from "react-bootstrap"
import ButtonComponent from "../button"

export const DesactivateUserModalComponent = ({ showModal, setShowModal, desactivateUser, user, loading }) => {
    return (
        <Modal show={showModal}>
            <Modal.Header closeButton
                onClick={() => setShowModal(false)}
            >
                <Modal.Title>Atenção</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Você tem certeza que deseja desativar esse usuário?
            </Modal.Body>
            <Modal.Footer>

                {
                    loading ?
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <span>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </span>
                        </div>
                        :
                        <>
                            <ButtonComponent
                                tamanho="7rem"
                                bgColor="#585859"
                                textColor="#FFF"
                                acao={() => setShowModal(false)}
                            > Cancelar</ButtonComponent>
                            <ButtonComponent
                                tamanho="10rem"
                                bgColor="#01a998"
                                textColor="#FFF"
                                acao={() => desactivateUser(user)}
                            >Salvar Alteração</ButtonComponent>
                        </>
                }

            </Modal.Footer>
        </Modal>
    )
}