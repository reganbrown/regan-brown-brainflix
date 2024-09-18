import videoDetails from "../../data/video-details.json";
import "./VideoPlayer.scss";
import viewIcon from "../../assets/Icons/views.svg";
import likesIcon from "../../assets/Icons/likes.svg";

export default function VideoPlayer() {
  console.log(videoDetails);
  const videoNumber = 0;
  const videoChoice = videoDetails[videoNumber].video;
  const videoPoster = videoDetails[videoNumber].image;
  const videoTitle = videoDetails[videoNumber].title;
  const channel = videoDetails[videoNumber].channel;
  const views = videoDetails[videoNumber].views;
  const date = convertDate(videoDetails[videoNumber].timestamp);
  const likes = videoDetails[videoNumber].likes;
  const description = videoDetails[videoNumber].description;

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
