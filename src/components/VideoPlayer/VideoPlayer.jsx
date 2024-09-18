import "./VideoPlayer.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

export default function VideoPlayer({ videoDetails }) {
  const videoChoice = videoDetails[0].video;
  const videoPoster = videoDetails[0].image;
  const videoTitle = videoDetails[0].title;
  const channel = videoDetails[0].channel;
  const views = videoDetails[0].views;
  const date = convertDate(videoDetails[0].timestamp);
  const likes = videoDetails[0].likes;
  const description = videoDetails[0].description;

  function convertDate(ms) {
    const date = new Date(ms);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let currentDate = `${month}/${day}/${year}`;
    return currentDate;
  }

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
      <div>{description}</div>
    </>
  );
}
