import "./index.css";

const Button = ({ textContent, isPassive = false }) => {
  /*   if (props.passive) {
    return;
    <button className="Button passiveBtn">{textContent}</button>;
    return <button className="Button">{textContent}</button>;
  }

  if (props.passive) {
    console.log(props.textContent);
  }
  console.log(props);
  return <button className="Button">{props.textContent}</button>; */
  return (
    <button className={`Button ${isPassive && "passiveBtn"}`}>
      {textContent}
    </button>
  );
};

export default Button;
