import { Component } from "react";
import SingleBook from "./SingleBook";
// import FormGenere from "./form";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchText: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center m-3">
          <Col md={6}>
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca nel nostro catalogo"
                value={this.state.searchText}
                onChange={(e) => this.setState({ searchText: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>

        {this.props.ArrayofBooks.filter((onebook) =>
          onebook.title.includes(this.state.searchText)
        ).map((onebook) => {
          return (
            <Col sm={12} md={6} lg={3} key={this.props.Libro} className=" p-2">
              <SingleBook Libro={onebook} />
            </Col>
          );
        })}
      </>
    );
  }
}
export default BookList;
