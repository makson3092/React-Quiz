import { Link } from "react-router-dom";
import Winner from "../../assets/Winner";

function Result({ correct, quiz }) {
  return (
    <div className="result">
      <Winner correct={correct} quiz={quiz} />
      <h2>
        Ви відповіли вірно {correct} з {quiz.length}
      </h2>
      <Link to="/React-Quiz">
        <button>Спробувати ще раз</button>
      </Link>
    </div>
  );
}

export default Result;
