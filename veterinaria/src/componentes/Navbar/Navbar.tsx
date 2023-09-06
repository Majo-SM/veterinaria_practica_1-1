import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <div className="container">
        <a className="navbar-brand" href="#">
          Veterinaria
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuInicio"
          aria-controls="menuInicio"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="menuInicio">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/clientes">
                CLIENTES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/citas">
                CITAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/compras">
                COMPRAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mascotas">
                MASCOTAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/productos">
                PRODUCTOS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vacunas">
                VACUNAS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ventas">
                VENTAS
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
