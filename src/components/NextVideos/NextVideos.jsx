import "./NextVideos.scss";
import Video from "../Video/Video";

export default function NextVideos({ videoDetails, videoID }) {
  return (
    <section className="video-list">
      <p className="video-list__label">NEXT VIDEOS</p>
      {videoDetails.map((video) => (
        <Video key={video.id} video={video} videoID={videoID} />
      ))}
    </section>
  );
}
