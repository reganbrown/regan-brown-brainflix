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
    let restVideos = [];
    videoDetails.forEach((item) => {
      if (item != video) {
        restVideos.push(item);
      }
    });
    setVideoList(restVideos);
  }

  let startingVideos = [];
  videoDetails.forEach((item) => {
    if (item != videoDetails[0]) {
      startingVideos.push(item);
    }
  });

  let [video, setVideo] = useState(videoDetails[0]);
  let [videoList, setVideoList] = useState(startingVideos);

  return (
    <>
      <Header />
      <VideoPlayer video={video} />
      <CommentForm />
      <VideoComments video={video} />
      <NextVideos videoDetails={videoList} videoID={videoID} />
    </>
  );
}

export default App;
