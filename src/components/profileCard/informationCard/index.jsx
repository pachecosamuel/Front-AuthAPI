
import './style.css';
import { ContainerCardSimplesStyle } from './style';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import { parseRoleToString } from '../../../utils/utils';

function InformationCard({ user }) {
    return (

        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Informações</Accordion.Header>
                    <Accordion.Body style={{ display: "flex", flexWrap: "wrap" }} >
                        <ListGroup variant="flush" style={{ width: "100%" }}>
                            <ListGroup.Item><strong>   Nome : </strong> {user.fullName}</ListGroup.Item>
                            <ListGroup.Item><strong> CPF : </strong>{user.cpf}</ListGroup.Item>
                            <ListGroup.Item><strong>  Telefone : </strong>{user.phone}</ListGroup.Item>
                            <ListGroup.Item><strong>  Email Pessoal : </strong>{user.personalEmail}</ListGroup.Item>
                            <ListGroup.Item><strong>  Role :  </strong>{parseRoleToString(user.role)}</ListGroup.Item>
                            <ListGroup.Item><strong>  Email Corporativo :</strong> {user.corporativeEmail}</ListGroup.Item>
                            <ListGroup.Item><strong>  Data nascimento : </strong>{user.birthDate}</ListGroup.Item>
                            <ListGroup.Item><strong> Data Admissão: </strong>{user.admissionDate}</ListGroup.Item>
                        </ListGroup>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>

    );
}

export default InformationCard;