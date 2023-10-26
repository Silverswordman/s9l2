import { Component } from "react";
import { Button, Form } from "react-bootstrap";

const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyNmY2ZTNkZDAwMTQ5NWU0M2UiLCJpYXQiOjE2OTgzMjI3MjYsImV4cCI6MTY5OTUzMjMyNn0.t792lvszvowBQgvfJlQPO9EnIQjIC7V8g34hvfewPAg";

class AddComment extends Component {
  state = {
    commentObject: {
      comment: "",
      rate: "1",
      elementId: this.props.bookId,
    },
  };
  sendNewComment = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(this.state.commentObject),
          headers: {
            Authorization: key,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.ok) {
        console.log("commento salvato!");
      } else {
        throw new Error("errore nel salvataggio del commento");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  render() {
    return (
      <Form onSubmit={this.sendNewComment}>
        <Form.Group>
          <Form.Label>Commento</Form.Label>
          <Form.Control
            type="text"
            value={this.state.commentObject.comment}
            onChange={(e) => {
              this.setState({
                commentObject: {
                  ...this.state.commentObject,
                  comment: e.target.value,
                },
              });
            }}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rate</Form.Label>
          <Form.Select
            placeholder="Vota qui"
            aria-label="comment rating"
            value={this.state.commentObject.rate}
            onChange={(e) => {
              this.setState({
                commentObject: {
                  ...this.state.commentObject,
                  rate: e.target.value,
                },
              });
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    );
  }
}

export default AddComment;
