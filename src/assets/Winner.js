import win from "./img/win-color.jpg";
import soBad from "./img/so-bad.jpg";
import notBad from "./img/not-bad.png";

const Winner = ({ correct, quiz }) => {
  if (correct === quiz.length) {
    return <img src={win} alt="win" />;
  } else if (correct >= 1) {
    return (
      <>
        <img src={notBad} alt="notBad" />
        <h2>Не погано, але можна краще!</h2>
      </>
    );
  }
  return (
    <>
      <img src={soBad} alt="soBad" />
    </>
  );
};

export default Winner;
