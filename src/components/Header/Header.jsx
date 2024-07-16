import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="full-page-header">

      <div className="header-content">
        <h1>Bienvenid@ a tu menu semanal </h1>
        <nav>
          <ul>
            <li>
              <Link to="/"></Link>
              <Link to="/MenuDiario" className="button"> Menú diario</Link>
              <Link to="/CreateMenu" className="button"> Crear nuevo Menú</Link>
              <Link to="/Login" className="button"> Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
