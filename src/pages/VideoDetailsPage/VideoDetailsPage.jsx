import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Body from "../../components/Body/Body";

export default function VideoDetailsPage({ apiKey }) {
  let params = useParams();
  let navigate = useNavigate();
  let [video, setVideo] = useState(null);
  let [videoList, setVideoList] = useState([]);

  let getVideosData = async () => {
    try {
      let { data } = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/?api_key=${apiKey}`
      );
      if (params.id === undefined) {
        getCurrentVideo(data[0].id);
      } else {
        getCurrentVideo(params.id);
      }
      setVideoList(data);
    } catch (error) {
      navigate("/404");
    }
  };

  const getCurrentVideo = async (id) => {
    try {
      let { data } = await axios.get(
        `https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${id}/?api_key=${apiKey}`
      );
      setVideo(data);
    } catch (error) {
      navigate("/404");
    }
  };

  useEffect(() => {
    getVideosData();
  }, [params]);

  if (video === null) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <Body video={video} videoList={videoList} />
    </>
  );
}
