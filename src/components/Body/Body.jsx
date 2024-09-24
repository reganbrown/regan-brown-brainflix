import VideoPlayer from "../VideoPlayer/VideoPlayer";
import CommentForm from "../CommentForm/CommentForm";
import VideoDetail from "../VideoDetail/VideoDetail";
import VideoComments from "../VideoComments/VideoComments";
import NextVideos from "../NextVideos/NextVideos";
import "./Body.scss";

export default function Body({ video, videoList, handleVideoID }) {
  return (
    <>
      <VideoPlayer video={video} />
      <div className="body__wrapper">
        <div className="body__wrapper-left">
          <VideoDetail video={video} />
          <CommentForm />
          <VideoComments video={video} />
        </div>
        <div className="body__wrapper-right">
          <NextVideos
            videoList={videoList}
            handleVideoID={handleVideoID}
            currentVideo={video.id}
          />
        </div>
      </div>
    </>
  );
}
