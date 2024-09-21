import { useState } from "react";
import videoDetails from "../../data/video-details.json";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoComments from "../VideoComments/VideoComments";
import CommentForm from "../CommentForm/CommentForm";
import NextVideos from "../NextVideos/NextVideos";
import VideoDetail from "../VideoDetail/VideoDetail";
import "./Body.scss";

export default function Body() {
  // passes to list of videos to update current video and list on click handler
  function handleVideoID(video) {
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
      <VideoPlayer video={video} />
      <div className="body__wrapper">
        <div className="body__wrapper-left">
          <VideoDetail video={video} />
          <CommentForm />
          <VideoComments video={video} />
        </div>
        <div className="body__wrapper-right">
          <NextVideos videoDetails={videoList} handleVideoID={handleVideoID} />
        </div>
      </div>
    </>
  );
}
