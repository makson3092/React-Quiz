import React from "react";

import Result from "./QuizResult";
import { quiz } from "../../assets/quiz";

function Game({ step, question, onClickVersion }) {
  const percent = Math.round((step / quiz.length) * 100);

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percent}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.version
          .sort(() => (Math.random() > 0.5 ? 1 : -1))
          .map((text, index) => (
            <li key={index} onClick={() => onClickVersion(text)}>
              {text}
            </li>
          ))}
      </ul>
    </>
  );
}

function Home() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = quiz[step];

  const onClickVersion = (index) => {
    setStep(step + 1);
    if (index === question.choice) {
      setCorrect(correct + 1);
    }
  };
  return (
    <>
      {step !== quiz.length ? (
        <Game step={step} question={question} onClickVersion={onClickVersion} />
      ) : (
        <Result correct={correct} quiz={quiz} />
      )}
    </>
  );
}

export default Home;
