import { useState } from "react";
import "./App.scss";
import videoDetails from "../src/data/video-details.json";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoComments from "./components/VideoComments/VideoComments";
import CommentForm from "./components/CommentForm/CommentForm";
import NextVideos from "./components/NextVideos/NextVideos";

function App() {
  // passes to list of videos to update current video and list on click handler
  function videoID(video) {
    setVideo(video);
    let restVideos = videoDetails.filter((item) => {
      return item !== video;
    });
    setVideoList(restVideos);
  }

  // set first video
  let [video, setVideo] = useState(videoDetails[0]);

  // create starting list of videos minus first video
  let startingVideos = videoDetails.filter((item) => {
    return item != video;
  });

  // set video list using starting list
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
