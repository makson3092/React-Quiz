import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <Link to="/quiz">
        <button>Почати!</button>
      </Link>
    </div>
  );
}

export default Header;
