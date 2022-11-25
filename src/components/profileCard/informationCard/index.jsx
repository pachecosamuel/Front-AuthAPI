
import Card from 'react-bootstrap/Card';


function InformationCard({ user }) {
    return (
        <Card>
            <Card.Body>
                <strong>   Nome : </strong> {user.fullName}
            </Card.Body>
            <Card.Body>
                <strong>   CPF : </strong>{user.cpf}
            </Card.Body>
            <Card.Body>
                <strong>   Email Pessoal : </strong>  {user.corporativeEmail}
            </Card.Body>
            <Card.Body>
                <strong>  Email Corporativo :</strong> {user.personalEmail}
            </Card.Body>
            <Card.Body>
                <strong>  Telefone : </strong>{user.phone}
            </Card.Body>
            <Card.Body>
                <strong>  Role :  </strong>{user.role}
            </Card.Body>
            <Card.Body>
                <strong>  Data nascimento : </strong>{user.birthDate}
            </Card.Body>
            <Card.Body>
                <strong>  Data Admissão: </strong>{user.admissionDate}
            </Card.Body>
        </Card>
    );
}

export default InformationCard;