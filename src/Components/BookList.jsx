import { Component } from "react";
import SingleBook from "./SingleBook";
import FormGenere from "./form";

class BookList extends Component {
  state = {
    searchValue: "",
  };
  render() {
    return (
      <>
        <FormGenere></FormGenere>

        {this.props.ArrayofBooks.map((onebook) => {
          return <SingleBook Libro={onebook} key={onebook.asin} />;
        })}
      </>
    );
  }
}
export default BookList;
