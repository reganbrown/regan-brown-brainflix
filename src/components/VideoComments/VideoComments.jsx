import Comment from "../Comment/Comment";

export default function VideoComments({ videoDetails }) {
  const commentsList = videoDetails[0].comments;
  return (
    <section className="video-list">
      {commentsList.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          comment={comment.comment}
        />
      ))}
    </section>
  );
}
