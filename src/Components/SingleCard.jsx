import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import fantasy from "../data/books/fantasy.json";

function SingleCard() {
  return fantasy.map((book) => {
    return (
      <Col sm={12} md={6} lg={3} key={book.asin} className=" p-2">
        <Card className="h-100 ">
          <Card.Img src={book.img} className="bg-warning-subtle p-3 h-75" />
          <Card.Body className="bg-warning-subtle ">
            <Card.Title>
              <p>{book.title}</p>
            </Card.Title>
            <Card.Text>
              <p>{book.genre}</p>
            </Card.Text>
            <Button variant="success">€ {book.price}</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default SingleCard;
