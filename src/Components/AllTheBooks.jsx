import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookCard from "./SingleCard";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        <BookCard />
        <BookCard />
        <BookCard />
      </Row>
    </Container>
  );
}

export default AllTheBooks;
