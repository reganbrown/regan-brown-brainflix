import "./CommentForm.scss";
import Button from "../Button/Button";
import { commentObject } from "../../utilities/commentObject";

export default function CommentForm({ currentVideo, postComment }) {
  function addComment(event) {
    event.preventDefault();
    const form = event.target;
    let comment = new commentObject("Regan Brown", form.commentInput.value);
    form.commentInput.value = "";
    postComment(currentVideo, comment);
  }

  return (
    <section className="comment-form__wrapper">
      <form className="comment-form" onSubmit={addComment}>
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
            name="commentInput"
            required
          ></textarea>

          <Button text="COMMENT" classChoice="button__comment" />
        </div>
      </form>
    </section>
  );
}
