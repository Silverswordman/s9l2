import "./App.css";
// importare il css di bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalNavbar from "./Components/MyNavbar";
import PersonalFooter from "./Components/MyFooter";
import Alert from "./Components/AlertWelcome";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import SingleBook from "./Components/SingleBook";
import BookList from "./Components/BookList";
import fantasybooks from "./data/books/fantasy.json";
import historybooks from "./data/books/history.json";
import horrorbooks from "./data/books/horror.json";
import romancebooks from "./data/books/romance.json";
import scifibooks from "./data/books/scifi.json";

const newbookArray = fantasybooks.concat(
  historybooks,
  horrorbooks,
  romancebooks,
  scifibooks
);

function App() {
  return (
    <div className="App bg-danger-subtle">
      <PersonalNavbar />
      <Alert />
      <main>
        <Container>
          <Row>
            <BookList ArrayofBooks={newbookArray} />
          </Row>
        </Container>
      </main>
      <PersonalFooter />
    </div>
  );
}

export default App;
