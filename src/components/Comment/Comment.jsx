import "./Comment.scss";

export default function Comment({ name, comment }) {
  return (
    <div className="comment">
      <div className="comment__name">{name}</div>
      <div className="comment__comment">{comment}</div>
    </div>
  );
}
