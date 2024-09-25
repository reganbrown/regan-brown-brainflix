import "./Comment.scss";
import timeConvert from "../../utilities/timeConvert";

export default function Comment({
  name,
  date,
  comment,
  commentID,
  videoID,
  deleteComment,
}) {
  function clickHandler() {
    deleteComment(videoID, commentID);
  }
  return (
    <article className="comment">
      <div className="comment__wrapper-left">
        <div className="comment__image"></div>
      </div>
      <div className="comment__wrapper-right">
        <div className="comment__name">{name}</div>
        <div className="comment__date">{timeConvert(date)}</div>
        <div className="comment__content">{comment}</div>
      </div>
      <button onClick={clickHandler}>delete</button>
    </article>
  );
}
