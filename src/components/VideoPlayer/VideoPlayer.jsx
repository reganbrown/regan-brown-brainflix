import "./VideoPlayer.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import TimeConvert from "../../utilities/TimeConvert/TimeConvert";

export default function VideoPlayer({ video }) {
  const videoChoice = video.video;
  const videoPoster = video.image;
  const videoTitle = video.title;
  const channel = video.channel;
  const views = video.views;
  const date = TimeConvert(video.timestamp);
  const likes = video.likes;
  const description = video.description;

  return (
    <>
      <video controls className="player" poster={videoPoster}>
        <source src={videoChoice} />
      </video>
      <h1 className="details__header">{videoTitle}</h1>
      <div className="details">
        <div className="details__channel">By {channel}</div>
        <div className="details__views">
          <img src={viewIcon} className="details__icon" />
          {views}
        </div>
        <div className="details__date">{date}</div>
        <div className="details__likes">
          <img src={likesIcon} className="details__icon" />
          {likes}
        </div>
      </div>
      <div className="details__description">{description}</div>
      <div className="details__comments">{video.comments.length} Comments</div>
    </>
  );
}
