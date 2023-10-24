
import Card from "react-bootstrap/Card";

function MyFooter() {
  return (
    <Card className="text-center">
     
      <Card.Body>
        <Card.Title> Per più informazioni</Card.Title>
        <Card.Link>Contattaci</Card.Link>
        <Card.Link>Dove Siamo</Card.Link>
        <Card.Link>FAQ</Card.Link>
      </Card.Body>
      <Card.Footer>
        Giulia <span>&copy;</span>{" "}
      </Card.Footer>
    </Card>
  );
}

export default MyFooter;
