import "./Upload.scss";

export default function Upload({ text, classChoice }) {
  return (
    <>
      <button type="button" className={classChoice}>
        {text}
      </button>
    </>
  );
}
