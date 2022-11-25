
import './style.css';
import { ContainerCardSimplesStyle } from './style';
import Accordion from 'react-bootstrap/Accordion';
function AddressCard() {
    return (
        <ContainerCardSimplesStyle>

            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Endereço</Accordion.Header>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text>  Cep :</text> </div>   <text>  UF :</text>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text>  Cidade :</text> </div>   <text>  Bairro :</text>
                    </Accordion.Body>
                    <Accordion.Body style={{ display: "flex" }} >
                        <div style={{ width: "60%" }}><text>  Logradouro :</text> </div>   <text>  Complemento :</text>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </ContainerCardSimplesStyle>
    );
}

export default AddressCard;

