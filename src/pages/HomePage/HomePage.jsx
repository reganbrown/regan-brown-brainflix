import { useEffect, useState } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoComments from "../../components/VideoComments/VideoComments";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideos from "../../components/NextVideos/NextVideos";
import VideoDetail from "../../components/VideoDetail/VideoDetail";
import "./HomePage.scss";
import axios from "axios";

export default function HomePage() {
  let apiKey = "2bafa04d-2fe9-47a1-91e1-b50a0d776e9c";
  // passes to list of videos to update current video and list on click handler

  // takes an id, does an axios call for the full details of that video by id,
  // updates the useState setVideo to the results
  const getCurrentVideo = async (id) => {
    let results = await axios.get(
      `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/?api_key=${apiKey}`
    );
    setVideo(results.data);
  };

  // click handler for when you click a video in the next videos list
  // calls getCurrentVideo with the id of the chosen video
  async function handleVideoID(videoID) {
    await getCurrentVideo(videoID);
  }

  // set first video
  let [video, setVideo] = useState(null);

  // set video list using starting list
  let [videoList, setVideoList] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let results = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${apiKey}`
      );

      await getCurrentVideo(results.data[0].id);
      setVideoList(results.data);
    };

    getData();
  }, []);

  if (video === null) {
    return <h1>loading...</h1>;
  }

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
          <NextVideos
            videoList={videoList}
            handleVideoID={handleVideoID}
            currentVideo={video.id}
          />
        </div>
      </div>
    </>
  );
}
