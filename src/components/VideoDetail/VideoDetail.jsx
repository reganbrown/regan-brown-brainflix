import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";
import "./VideoDetail.scss";
import timeConvert from "../../utilities/timeConvert";

export default function VideoDetail({ video }) {
  const videoTitle = video.title;
  const channel = video.channel;
  const views = video.views;
  const date = timeConvert(video.timestamp);
  const likes = video.likes;
  const description = video.description;
  return (
    <>
      <h1 className="details__header">{videoTitle}</h1>
      <section className="details">
        <div className="details__left">
          <div className="details__channel">By {channel}</div>
          <div className="details__date">{date}</div>
        </div>
        <div className="details__right">
          <div className="details__views">
            <img src={viewIcon} className="details__icon" />
            {views}
          </div>

          <div className="details__likes">
            <img src={likesIcon} className="details__icon" />
            {likes}
          </div>
        </div>
      </section>
      <div className="details__description">{description}</div>
      <div className="details__comments">{video.comments.length} Comments</div>
    </>
  );
}
