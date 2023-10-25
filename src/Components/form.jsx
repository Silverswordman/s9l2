import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class FormGenere extends Component {
  state = {
    searchText: "",
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center m-3">
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca nel nostro catalogo"
                value={this.state.searchText}
                onChange={(event) =>
                  this.setState({ searchText: event.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormGenere;
