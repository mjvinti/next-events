import classes from "./comment-list.module.css";

function CommentList({ items }) {
  return (
    <ul className={classes.comments}>
      {items.map(({ comment, _id, name }) => (
        <li key={_id}>
          <p>{comment}</p>
          <div>
            By <address>{name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
