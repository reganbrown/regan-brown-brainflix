import "./Comment.scss";
import TimeConvert from "../../utilities/TimeConvert/TimeConvert";

export default function Comment({ name, date, comment }) {
  return (
    <div className="comment">
      <div className="comment__wrapper-left">
        <div className="comment__image"></div>
      </div>
      <div className="comment__wrapper-right">
        <div className="comment__name">{name}</div>
        <div className="comment__date">{TimeConvert(date)}</div>
        <div className="comment__content">{comment}</div>
      </div>
    </div>
  );
}
