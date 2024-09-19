import "./Video.scss";

export default function Video({ video }) {
  console.log(video);
  return (
    <div className="video">
      <div className="video__left">
        <img src={video.image} className="video__image" />
      </div>
      <div className="video__right">
        {video.title} {video.channel}
      </div>
    </div>
  );
}
