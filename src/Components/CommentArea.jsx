import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyNmY2ZTNkZDAwMTQ5NWU0M2UiLCJpYXQiOjE2OTgzMjI3MjYsImV4cCI6MTY5OTUzMjMyNn0.t792lvszvowBQgvfJlQPO9EnIQjIC7V8g34hvfewPAg";

class CommentArea extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.getComments();
  }

  getComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
        {
          headers: {
            Authorization: key,
          },
        }
        
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Commenti libro", data);
        this.setState({
          reviews: data,
        });
      } else {
        throw new Error("errore commenti");
      }
    } catch (error) {
      console.log(error, "errorone");
    }
  };

  render() {
    return (
      <div>
        {/* <p>Hola</p> */}
        {/* <p>{this.state.review.comment}</p>
          <p>{this.state.review.rate}</p>
          <p>{this.state.review.elementId}</p> */}
        <CommentList comments={this.state.reviews}></CommentList>
        <AddComment bookId={this.props.bookId}  />
      </div>
    );
  }
}

export default CommentArea;
