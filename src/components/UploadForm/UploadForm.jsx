import videoThumbnail from "../../assets/Images/Upload-video-preview.jpg";
import "./UploadForm.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UploadForm() {
  const [titleInput, setTitleInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descError, setDescError] = useState(false);
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.success("Video submitted Successfully! Redirecting back to home...", {
      onClose: () => navigate("/"),
    });
  const notifyError = () => toast.error("Please fill in all required fields");

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;

    if (titleInput.trim() === "") {
      setTitleError(true);
      isValid = false;
    }

    if (descInput.trim() === "") {
      setDescError(true);
      isValid = false;
    }

    if (isValid === false) {
      notifyError();
    }

    if (isValid === true) {
      notifySuccess();
    }
  };
  const handleChangeTitle = (event) => {
    setTitleInput(event.target.value);
    setTitleError(false);
  };

  const handleChangeDescription = (event) => {
    setDescInput(event.target.value);
    setDescError(false);
  };

  return (
    <div className="upload">
      <h2 className="upload__header">Upload Video</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <div className="top-wrapper">
          <div className="top-wrapper__left">
            <p className="upload__label">VIDEO THUMBNAIL</p>
            <img src={videoThumbnail} className="upload__thumbnail" />
          </div>
          <div className="top-wrapper__right">
            <label className="upload-form__label" htmlFor="titleInput">
              TITLE YOUR VIDEO
            </label>
            <input
              type="text"
              className={`upload-form__title ${titleError ? "error" : ""}`}
              placeholder="Add a title to your video"
              name="titleInput"
              id="titleInput"
              value={titleInput}
              onChange={handleChangeTitle}
            ></input>

            <label className="upload-form__label" htmlFor="titleInput">
              ADD A VIDEO DESCRIPTION
            </label>
            <textarea
              className={`upload-form__description ${descError ? "error" : ""}`}
              placeholder="Add a description to your video"
              name="descriptionInput"
              onChange={handleChangeDescription}
              value={descInput}
            ></textarea>
          </div>
        </div>

        <ToastContainer limit={3} />
        <div className="bottom-wrapper">
          <div className="bottom-wrapper__end">
            <Button text="PUBLISH" classChoice="button__upload" />
          </div>
          <div className="bottom-wrapper__start">
            <Link to="/" className="upload__link">
              <p className="upload__cancel">CANCEL</p>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
