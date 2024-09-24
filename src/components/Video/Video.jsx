import "./Video.scss";
import { Link } from "react-router-dom";

export default function Video({ video }) {
  return (
    <Link className="video" to={`/id/${video.id}`}>
      <div className="video__left">
        <img src={video.image} alt={video.title} className="video__image" />
      </div>
      <div className="video__right">
        <div className="video__title">{video.title} </div>
        <div className="video__channel">{video.channel}</div>
      </div>
    </Link>
  );
}
