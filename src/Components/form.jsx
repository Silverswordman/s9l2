import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function FormGenere() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={6}>
          <Form.Label htmlFor="search">
            Ricerca il tuo genere preferito
          </Form.Label>
          <Form.Control type="text" id="search" />
        </Col>
      </Row>
    </Container>
  );
}

export default FormGenere;
