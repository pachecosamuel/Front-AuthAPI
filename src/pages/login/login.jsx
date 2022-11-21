import React from "react";
import { Body, DivOne, DivTwo, Img } from "./styledLogin";
import image from "../../assets/Group.svg"


export const Login = () => {
    return (
        <Body>
            <DivOne>
                <Img src={image} />
            </DivOne>
            <DivTwo>ola</DivTwo>

        </Body>
        // <Container class="root">

        //     <Row>
        //         <Col sm={8}>sm=8</Col>
        //         <Col sm={4}>sm=4</Col>
        //     </Row>

        // </Container>
    );
}