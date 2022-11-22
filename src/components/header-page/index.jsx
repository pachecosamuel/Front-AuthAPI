import { React } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ContainerHeader } from "./style";

function HeaderPageComponent({ title, icon }) {
    return (
        <Row>
            <Col>
                <ContainerHeader>
                    {icon}
                    <span>{title}</span>
                </ContainerHeader>
            </Col>
        </Row>
    );
}

export default HeaderPageComponent;