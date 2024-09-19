import "./Comment.scss";

export default function Comment({ comment, name }) {
  return (
    <div className="comment">
      <div className="comment__comment">{comment}</div>
      <div className="comment__name">{name}</div>
    </div>
  );
}
