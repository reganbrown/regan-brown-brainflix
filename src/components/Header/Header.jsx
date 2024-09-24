import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Login from "../Login/Login";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="header">
        <Logo />
        <div className="header__content">
          <Search />
          <Login />
          <Link to="/upload" className="link">
            <Button text="UPLOAD" classChoice="button__upload" />
          </Link>
        </div>
      </header>
    </>
  );
}
