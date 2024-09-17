import "./Search.scss";

export default function Search() {
  return (
    <>
      <form className="search__form">
        <div>
          <input
            type="text"
            className="search__bar"
            placeholder="Search"
          ></input>
        </div>
      </form>
    </>
  );
}
