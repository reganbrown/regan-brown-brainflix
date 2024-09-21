import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import Login from "../Login/Login";
import "./Header.scss";

export default function Header() {
  return (
    <>
      <div className="header">
        <Logo />
        <div className="header__middle">
          <Search />
          <Login />
        </div>
        <Button text="UPLOAD" classChoice="button__upload" />
      </div>
    </>
  );
}
