import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Component } from "react";





class SingleBook extends Component {
  state = { selected: false };
  render() {
    return (
      <Col sm={12} md={6} lg={3} key={this.props.Libro.asin} className=" p-2">
        <Card className="h-100 ">
          <Card.Img
            src={this.props.Libro.img}
            className="bg-warning-subtle p-3 h-75"
          />
          <Card.Body className="bg-warning-subtle ">
            <Card.Title>
              <p>{this.props.Libro.title}</p>
            </Card.Title>
            <Card.Text>Categoria: "{this.props.Libro.category}"</Card.Text>
            <Button onClick={ClickedBook} variant="success">€ {this.props.Libro.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

function ClickedBook (e){
if ()
}

export default SingleBook;
