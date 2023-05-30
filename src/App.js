import React from "react";
import { quiz } from "./assets/quiz";
import win from "./assets/img/win-color.jpg";
import soBad from "./assets/img/so-bad.jpg";
import notBad from "./assets/img/not-bad.png";

const Winner = ({ correct }) => {
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

function Result({ correct }) {
  return (
    <div className="result">
      <Winner correct={correct} />
      <h2>
        Ви відповіли вірно {correct} з {quiz.length}
      </h2>
      <a href="/">
        <button>Спробувати ще раз</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVersion }) {
  const percent = Math.round((step / quiz.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.version.map((text, index) => (
          <li key={text} onClick={() => onClickVersion(index)}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = quiz[step];

  const onClickVersion = (index) => {
    console.log(step, index);
    setStep(step + 1);
    if (index === question.choice) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="wrapper">
      {step !== quiz.length ? (
        <Game step={step} question={question} onClickVersion={onClickVersion} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
