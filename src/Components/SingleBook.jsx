import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Component } from "react";
import CommentArea from "./CommentArea";

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
      <Card className="h-100 " key={this.props.Libro.asin}>
        <Card.Img
          onClick={this.Clickedbook}
          src={this.props.Libro.img}
          className={` p-3 h-75 ${
            this.state.selected ? "bg-warning" : "bg-warning-subtle"
          }`}
        />
        <Card.Body className="bg-warning-subtle  ">
          <Card.Title className="text-truncate">
            <p>{this.props.Libro.title}</p>
          </Card.Title>
          <Card.Text>Categoria: "{this.props.Libro.category}"</Card.Text>
          <Button variant="success">€ {this.props.Libro.price}</Button>
        </Card.Body>
        {this.state.selected === true && (
          <CommentArea bookId={this.props.Libro.asin} />
        )}
      </Card>
    );
  }
}
export default SingleBook;
