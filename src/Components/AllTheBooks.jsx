import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import FantasyBooks from "./Fantasycard";
import HistoryBooks from "./HistoryCard";

function AllTheBooks() {
  return (
    <Container>
      <Row>
        <FantasyBooks />
        <HistoryBooks />
      </Row>
    </Container>
  );
}

export default AllTheBooks;
