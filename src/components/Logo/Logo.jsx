import "./Logo.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";

export default function Logo() {
  return (
    <>
      <img
        src={BrainFlixLogo}
        alt="BrainFlix Logo"
        className="brainflix-logo"
      />
    </>
  );
}
