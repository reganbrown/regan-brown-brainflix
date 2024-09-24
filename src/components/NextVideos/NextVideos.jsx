import "./NextVideos.scss";
import Video from "../Video/Video";

export default function NextVideos({ videoList, currentVideo }) {
  let filtered = videoList.filter((item) => {
    if (item.id !== currentVideo) {
      return item;
    }
  });

  return (
    <section className="video-list">
      <p className="video-list__label">NEXT VIDEOS</p>
      {filtered.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </section>
  );
}
