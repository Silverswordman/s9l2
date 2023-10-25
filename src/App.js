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

function App() {
  return (
    <div className="App bg-danger-subtle">
      <PersonalNavbar />
      <Alert />
      <main>
      <Container>
      <Row>
        
        <BookList ArrayofBooks={fantasybooks}/>
        </Row>
    </Container>
      </main>
      <PersonalFooter />
    </div>
  );
}

export default App;
