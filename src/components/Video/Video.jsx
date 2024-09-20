import "./Video.scss";

export default function Video({ video, videoID }) {
  function clickHandler() {
    videoID(video);
  }

  return (
    <a
      className="video"
      onClick={() => {
        clickHandler();
      }}
    >
      <div className="video__left">
        <img src={video.image} className="video__image" />
      </div>
      <div className="video__right">
        <div className="video__title">{video.title} </div>
        <div>{video.channel}</div>
      </div>
    </a>
  );
}
