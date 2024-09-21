import "./VideoPlayer.scss";

export default function VideoPlayer({ video }) {
  const videoChoice = video.video;
  const videoPoster = video.image;

  return (
    <>
      <video controls className="player" poster={videoPoster}>
        <source src={videoChoice} />
      </video>
    </>
  );
}
