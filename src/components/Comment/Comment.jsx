import "./Comment.scss";

export default function Comment({ name, date, comment }) {
  function convertDate(ms) {
    const date = new Date(ms);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${month}/${day}/${year}`;
    return currentDate;
  }

  return (
    <div className="comment">
      <div className="comment__left"></div>
      <div className="comment__right">
        <div className="comment__name">{name}</div>
        <div className="comment__date">{convertDate(date)}</div>
        <div className="comment__comment">{comment}</div>
      </div>
    </div>
  );
}
