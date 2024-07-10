import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header>
      <h1>Menu Semanal</h1>
      <nav>
        <ul>
          <li>
            <Link to="/"> Menú diario</Link>
            <Link to="/ListMenu"> Lista de comidas</Link>
            <Link to="/Login"> Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
