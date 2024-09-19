import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Upload from "../Upload/Upload";
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
        <Upload text="UPLOAD" classChoice="upload" />
      </div>
    </>
  );
}
