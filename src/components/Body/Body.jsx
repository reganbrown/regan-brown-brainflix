import { useState } from "react";
import videoDetails from "../../data/video-details.json";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import VideoComments from "../VideoComments/VideoComments";
import CommentForm from "../CommentForm/CommentForm";
import NextVideos from "../NextVideos/NextVideos";

export default function Body() {
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
      <VideoPlayer video={video} />
      <CommentForm />
      <VideoComments video={video} />
      <NextVideos videoDetails={videoList} videoID={videoID} />
    </>
  );
}
