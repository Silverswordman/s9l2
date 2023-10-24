import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import fantasy from "../data/books/fantasy.json";

function SingleCard() {
  return fantasy.map((book) => {
    return (
      <Col sm={12} md={6} lg={3} key={book.asin}>
        <Card>
          <Card.Img src={book.img} />
          <Card.Body>
            <Card.Title>
              <p>{book.title}</p>
            </Card.Title>
            <Card.Text>
              <p>{book.price}</p>
            </Card.Text>
            <Button variant="success">Buy Now</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}

export default SingleCard;
