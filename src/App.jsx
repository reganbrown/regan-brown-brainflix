import { useState } from "react";
import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoComments from "./components/VideoComments/VideoComments";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  function videoID(video) {
    setVideo(video);
  }

  let [video, setVideo] = useState(videoDetails[0]);

  return (
    <>
      <Header />
      <VideoPlayer video={video} />
      <CommentForm />
      <VideoComments video={video} />
      <NextVideos videoDetails={videoDetails} videoID={videoID} />
    </>
  );
}

export default App;
