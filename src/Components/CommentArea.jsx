import { Component } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyNmY2ZTNkZDAwMTQ5NWU0M2UiLCJpYXQiOjE2OTgzMjI3MjYsImV4cCI6MTY5OTUzMjMyNn0.t792lvszvowBQgvfJlQPO9EnIQjIC7V8g34hvfewPAg";

class CommentArea extends Component {
  state = {
    review: {
      comment: "",
      rate: "",
      elementId: "",
    },
  };

  getComments = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization: key,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("hello", data);
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error, "errorone");
    }
  };
  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <>
        <div>
          <p>Hola</p>
          <CommentList></CommentList>
          <AddComment></AddComment>
        </div>
      </>
    );
  }
}

export default CommentArea;
