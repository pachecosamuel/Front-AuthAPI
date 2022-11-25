
import './style.css';
import { ContainerCardSimplesStyle } from './style';
import Accordion from 'react-bootstrap/Accordion';
function AddressCard({ user }) {
    return (
        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Endereço</Accordion.Header>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text> <strong>Cep :</strong> {user.cep}</text> </div>   <text> <strong> UF :</strong> {user.uf}</text>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text> <strong>Cidade</strong>  : {user.cidade}</text> </div>   <text> <strong> Bairro :</strong> {user.bairro}</text>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text>  <strong>Logradouro : </strong> {user.logradouro}:</text> </div>   <text>  <strong>Complemento :</strong> {user.complemento}</text>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>
    );
}

export default AddressCard;

