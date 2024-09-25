import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentForm from "../CommentForm/CommentForm";
import VideoDetail from "../VideoDetail/VideoDetail";
import VideoComments from "../VideoComments/VideoComments";
import NextVideos from "../NextVideos/NextVideos";
import "./Body.scss";

export default function Body({ video, videoList, postComment, deleteComment }) {
  return (
    <>
      <VideoPlayer video={video} />
      <div className="body__wrapper">
        <div className="body__wrapper-left">
          <VideoDetail video={video} />
          <CommentForm currentVideo={video.id} postComment={postComment} />
          <VideoComments video={video} deleteComment={deleteComment} />
        </div>
        <div className="body__wrapper-right">
          <NextVideos videoList={videoList} currentVideo={video.id} />
        </div>
      </div>
    </>
  );
}
