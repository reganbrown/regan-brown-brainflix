import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoComments from "./components/VideoComments/VideoComments";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer videoDetails={videoDetails} />
      <CommentForm />
      <VideoComments videoDetails={videoDetails} />
      <NextVideos videoDetails={videoDetails} />
    </>
  );
}

export default App;
