import { Component } from "react";
import SingleBook from "./SingleBook";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

class BookList extends Component {
  render() {
    return this.props.ArrayofBooks.map((onebook) => {
      return <SingleBook Libro={onebook} />;
    });
  }
}
export default BookList;
