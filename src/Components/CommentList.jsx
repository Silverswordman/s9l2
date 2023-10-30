import SingleComment from "./SingleComment";
import { ListGroup } from "react-bootstrap";

const CommentList = (props) => {
  return (
    <ListGroup className="bg-info-subtle">
      {props.comments.map((x) => {
        return (
          <SingleComment
            commentoUnico={x}
            key={x._id}
            getComments={props.comments}
          />
        );
      })}
    </ListGroup>
  );
};
export default CommentList;
