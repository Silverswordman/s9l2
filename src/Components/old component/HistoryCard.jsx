import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import history from "../../data/books/history.json";

function historyCards() {
  return history.map((book, number) => {
    if (number < 8) {
      return (
        <Col sm={12} md={6} lg={3} key={book.asin} className=" p-2 x">
          <Card className="h-100 ">
            <Card.Img
              src={book.img}
              className="bg-warning-subtle p-3 img-fluid"
            />
            <Card.Body className="bg-warning-subtle ">
              <Card.Title className="text-nowrap text-truncate">
                <p>{book.title}</p>
              </Card.Title>
              <Card.Text>Categoria:" {book.category}"</Card.Text>
              <Button variant="success">€ {book.price}</Button>
            </Card.Body>
          </Card>
        </Col>
      );
    } else return null;
  });
}

export default historyCards;
