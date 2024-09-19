import "./Button.scss";

export default function Button({ text, classChoice }) {
  return (
    <>
      <button type="button" className={classChoice}>
        {text}
      </button>
    </>
  );
}
