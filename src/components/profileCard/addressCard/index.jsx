
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
                        <div style={{ width: "60%" }}><p> <strong>Cep :</strong> {user.cep}</p> </div>   <p> <strong> UF :</strong> {user.uf}</p>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><p> <strong>Cidade</strong>  : {user.cidade}</p> </div>   <p> <strong> Bairro :</strong> {user.bairro}</p>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><p>  <strong>Logradouro : </strong> {user.logradouro}:</p> </div>   <p>  <strong>Complemento :</strong> {user.complemento}</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>
    );
}

export default AddressCard;

