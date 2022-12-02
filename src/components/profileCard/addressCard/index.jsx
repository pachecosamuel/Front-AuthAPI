
import './style.css';
import { ContainerCardSimplesStyle } from './style';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
function AddressCard({ user }) {
    return (
        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Endereço</Accordion.Header>
                    <Accordion.Body style={{ display: "flex" }} >
                        <ListGroup variant="flush" style={{ width: "100%" }}>
                            <ListGroup.Item > <strong>Cep :</strong> {user.cep}</ListGroup.Item>
                            <ListGroup.Item> <strong> UF :</strong> {user.uf}</ListGroup.Item>
                            <ListGroup.Item> <strong>Cidade</strong>  : {user.cidade}</ListGroup.Item>
                            <ListGroup.Item><strong> Bairro :</strong> {user.bairro}</ListGroup.Item>
                            <ListGroup.Item> <strong>Logradouro : </strong>{user.logradouro}</ListGroup.Item>
                            <ListGroup.Item><strong>Complemento :</strong> {user.complemento}</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>
    );
}

export default AddressCard;

