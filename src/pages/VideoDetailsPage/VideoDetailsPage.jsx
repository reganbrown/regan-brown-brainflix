import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Body from "../../components/Body/Body";

export default function VideoDetailsPage({ apiKey }) {
  let params = useParams();
  let navigate = useNavigate();

  const getCurrentVideo = async (id) => {
    try {
      let results = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/?api_key=${apiKey}`
      );
      setVideo(results.data);
    } catch (error) {
      navigate("/404");
    }
  };

  async function handleVideoID(videoID) {
    navigate(`/id/${videoID}`);
  }

  let [video, setVideo] = useState(null);

  // set video list using starting list
  let [videoList, setVideoList] = useState([]);

  useEffect(() => {
    let getData = async () => {
      try {
        let results = await axios.get(
          `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${apiKey}`
        );
        if (params.id === undefined) {
          getCurrentVideo(results.data[0].id);
        } else {
          getCurrentVideo(params.id);
        }
        setVideoList(results.data);
      } catch (error) {
        navigate("/404");
      }
    };

    getData();
  }, [params]);

  if (video === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Body video={video} videoList={videoList} handleVideoID={handleVideoID} />
    </>
  );
}
