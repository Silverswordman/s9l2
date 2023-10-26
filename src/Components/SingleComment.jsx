import { ListGroupItem } from "react-bootstrap";

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
    </ListGroupItem>
  );
};

export default SingleComment;
