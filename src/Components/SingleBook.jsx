import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Component } from "react";

class SingleBook extends Component {
  state = { selected: false };

  Clickedbook = () => {
    console.log("clicckato");
    if (this.state.selected === false) {
      this.setState({ selected: true });
    } else {
      this.setState({ selected: false });
    }
  };

  render() {
    return (
      <Col sm={12} md={6} lg={3} key={this.props.Libro.asin} className=" p-2">
        <Card className="h-100 ">
          <Card.Img
            onClick={this.Clickedbook}
            src={this.props.Libro.img}
            className={` p-3 h-75 ${
              this.state.selected ? "bg-warning" : "bg-warning-subtle"
            }`}
          />
          <Card.Body className="bg-warning-subtle  ">
            <Card.Title>
              <p>{this.props.Libro.title}</p>
            </Card.Title>
            <Card.Text>Categoria: "{this.props.Libro.category}"</Card.Text>
            <Button variant="success">€ {this.props.Libro.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
export default SingleBook;
