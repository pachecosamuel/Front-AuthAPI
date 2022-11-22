import { React } from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PageContainer } from "./style";

function PageContainerComponent(props) {
  return (
    <PageContainer>
      <Row>
        <Col className="col-12">{props.children}</Col>
      </Row>
    </PageContainer>
  );
}

export default PageContainerComponent;