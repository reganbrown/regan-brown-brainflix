import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoComments from "./components/VideoComments/VideoComments";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer videoDetails={videoDetails} />
      <VideoComments videoDetails={videoDetails} />
    </>
  );
}

export default App;
