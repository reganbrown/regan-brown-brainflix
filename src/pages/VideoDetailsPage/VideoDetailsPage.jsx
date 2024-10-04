import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Body from "../../components/Body/Body";
import { baseURL } from "../../utilities/api";

export default function VideoDetailsPage() {
  let params = useParams();
  let navigate = useNavigate();
  let [video, setVideo] = useState(null);
  let [videoList, setVideoList] = useState([]);

  let getVideosData = async () => {
    try {
      let { data } = await axios.get(`${baseURL}/videos`);
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
      let { data } = await axios.get(`${baseURL}/videos/${id}`);
      setVideo(data);
    } catch (error) {
      navigate("/404");
    }
  };

  const postComment = async (id, comment) => {
    try {
      await axios.post(`${baseURL}/videos/${id}/comments/`, comment);
      getCurrentVideo(id);
    } catch (error) {
      console.log("error posting comment: ", error);
    }
  };

  const deleteComment = async (videoID, commentID) => {
    try {
      await axios.delete(`${baseURL}/videos/${videoID}/comments/${commentID}`);
      getCurrentVideo(videoID);
    } catch (error) {
      console.log("error deleting comment: ", error);
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
      <Body
        video={video}
        videoList={videoList}
        postComment={postComment}
        deleteComment={deleteComment}
      />
    </>
  );
}
