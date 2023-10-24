import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "./Fantasycard";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        <BookCard />
      </Row>
    </Container>
  );
}

export default AllTheBooks;
