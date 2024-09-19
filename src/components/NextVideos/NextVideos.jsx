import "./NextVideos.scss";
import Video from "../Video/Video";

export default function NextVideos({ videoDetails }) {
  console.log(videoDetails);
  return (
    <section className="video-list">
      {videoDetails.map((video) => (
        <Video video={video} />
      ))}
    </section>
  );
}
