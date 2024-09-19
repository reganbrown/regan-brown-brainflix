import Comment from "../Comment/Comment";

export default function VideoComments({ video }) {
  const commentsList = video.comments;
  return (
    <section className="comments-list">
      {commentsList.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}
