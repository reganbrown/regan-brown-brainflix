import "./Button.scss";

export default function Button({ text, classChoice }) {
  return (
    <>
      <button className={classChoice}>{text}</button>
    </>
  );
}
