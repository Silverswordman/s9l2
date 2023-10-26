import { ListGroupItem, Button } from "react-bootstrap";
const key =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNTkyNmY2ZTNkZDAwMTQ5NWU0M2UiLCJpYXQiOjE2OTgzMjI3MjYsImV4cCI6MTY5OTUzMjMyNn0.t792lvszvowBQgvfJlQPO9EnIQjIC7V8g34hvfewPAg";
const SingleComment = (props) => {
  return (
    <ListGroupItem className="border border-bottom border-info-subtle">
      <p>
        {" "}
        <span className="fw-bold">Da: </span>
        {props.commentoUnico.author}
      </p>
      <p>
        {" "}
        Voto:<span className="fw-bold"> {props.commentoUnico.rate}</span>
      </p>
      <p>{props.commentoUnico.comment} </p>
      <Button
        className="btn-sm btn-danger "
        onClick={() => {
          fetch(
            `https://striveschool-api.herokuapp.com/api/comments/${props.commentoUnico._id}`,
            {
              method: "DELETE",
              headers: {
                Authorization: key,
              },
            }
          )
            .then((res) => {
              if (res.ok) {
                console.log("commento eliminato");
                props.getComments();
              } else {
                throw new Error("errore");
              }
            })
            .catch((err) => {
              console.log("errore", err);
            });
        }}
      >
        Elimina
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
