import "./CommentForm.scss";
import Button from "../Button/Button";

export default function CommentfForm() {
  return (
    <section className="comments">
      <form className="comments__form">
        <div className="form-left">
          <div className="form-left__image"></div>
        </div>
        <div className="form-right">
          <label className="comments__comment-label" htmlFor="commentInput">
            JOIN THE CONVERSATION
          </label>
          <textarea
            name="commenterComment"
            className="commenter__comment"
            id="commentInput"
            placeholder="Add a new comment"
            required
          ></textarea>
          <Button text="COMMENT" classChoice="newcomment" />
        </div>
      </form>
    </section>
  );
}
