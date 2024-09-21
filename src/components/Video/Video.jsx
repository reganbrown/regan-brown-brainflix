import "./Video.scss";

export default function Video({ video, handleVideoID }) {
  function clickHandler() {
    handleVideoID(video);
  }

  return (
    <a
      className="video"
      onClick={() => {
        clickHandler();
      }}
    >
      <div className="video__left">
        <img src={video.image} alt={video.title} className="video__image" />
      </div>
      <div className="video__right">
        <div className="video__title">{video.title} </div>
        <div className="video__channel">{video.channel}</div>
      </div>
    </a>
  );
}
