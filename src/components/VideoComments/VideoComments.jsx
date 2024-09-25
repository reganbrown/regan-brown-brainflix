import Comment from "../Comment/Comment";

export default function VideoComments({ video, deleteComment }) {
  const commentsList = video.comments;
  commentsList.sort((a, b) => {
    if (a.timestamp < b.timestamp) return 1;
    if (a.timestamp > b.timestamp) return -1;
    return 0;
  });

  return (
    <section className="comments-list">
      {commentsList.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
          commentID={comment.id}
          videoID={video.id}
          deleteComment={deleteComment}
        />
      ))}
    </section>
  );
}
