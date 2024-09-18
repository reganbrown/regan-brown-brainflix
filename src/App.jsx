import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer videoDetails={videoDetails} />
    </>
  );
}

export default App;
