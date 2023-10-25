import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center">
      <Card.Body className="bg-warning-subtle fst-italic ">
        <Card.Title> Per più informazioni</Card.Title>
        <Card.Link className="text-decoration-none ">Contattaci</Card.Link>
        <Card.Link className="text-decoration-none ">Dove Siamo</Card.Link>
        <Card.Link className="text-decoration-none ">FAQ</Card.Link>
      </Card.Body>
      <Card.Footer className="bg-danger-subtle fst-italic">
        Giulia <span>&copy;</span>
      </Card.Footer>
    </Card>
  );
}

export default MyFooter;
