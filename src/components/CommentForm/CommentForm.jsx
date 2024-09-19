import "./CommentForm.scss";

export default function CommentfForm() {
  return (
    <section className="comments">
      <form className="comments__form">
        <div className="form-left">
          <div className="form-left__image"></div>
        </div>
        <div className="form-right">
          <label className="comments__comment-label" for="commentInput">
            JOIN THE CONVERSATION
          </label>
          <textarea
            name="commenterComment"
            className="commenter__comment"
            id="commentInput"
            placeholder="Add a new comment"
            required
          ></textarea>
          <button className="comments__button">COMMENT</button>
        </div>
      </form>
    </section>
  );
}
