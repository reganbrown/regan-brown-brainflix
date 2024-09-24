import "./Logo.scss";
import BrainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-holder">
      <Link to="/">
        <img
          src={BrainFlixLogo}
          alt="BrainFlix Logo"
          className="brainflix-logo"
        />
      </Link>
    </div>
  );
}
