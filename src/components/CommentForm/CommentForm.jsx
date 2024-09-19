import "./CommentForm.scss";

export default function CommentfForm() {
  return (
    <section className="comments">
      <h2 className="comments__title">Join the Conversation</h2>
      <form className="comments__form">
        <div className="form-left">
          <div className="form-left__image"></div>
        </div>
        <div className="form-right">
          <label className="comments__comment-label" for="commentInput">
            COMMENT
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
