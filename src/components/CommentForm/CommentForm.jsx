import "./CommentForm.scss";
import Button from "../Button/Button";

export default function CommentfForm() {
  return (
    <section className="comment-form__wrapper">
      <form className="comment-form">
        <div className="comment-form__left">
          <div className="comment-form__image"></div>
        </div>

        <div className="comment-form__right">
          <label className="comment-form__label" htmlFor="commentInput">
            JOIN THE CONVERSATION
          </label>

          <textarea
            className="comment-form__comment"
            id="commentInput"
            placeholder="Add a new comment"
            required
          ></textarea>

          <Button text="COMMENT" classChoice="button__comment" />
        </div>
      </form>
    </section>
  );
}
