import { NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Header.css";

function NavbarUsuario({ usuario }) {
  const navigate = useNavigate();
  const auth = getAuth();

  const cerrarSesion = async () => {
    await signOut(auth);
    sessionStorage.removeItem("mensajeBienvenida");
    navigate("/");
  };

  return (
    <header>
      <div className="logo">
        <h1>
          Refugio<span>Rosa</span>
        </h1>
      </div>

      <nav>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          ☰
        </label>

        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Inicio
            </NavLink>
          </li>
  
          <li>
            <NavLink to="/pendiente" className={({ isActive }) => (isActive ? "active" : "")}>
              Pendientes
            </NavLink>
          </li>
          <li>
            <NavLink to="/chat" className={({ isActive }) => (isActive ? "active" : "")}>
              Chat
            </NavLink>
          </li>
          <li>
            <NavLink to="/autocuidado" className={({ isActive }) => (isActive ? "active" : "")}>
              Autocuidado
            </NavLink>
          </li>
          <li>
            <NavLink to="/playlist" className={({ isActive }) => (isActive ? "active" : "")}>
              Playlist
            </NavLink>
          </li>
          <li className="text-rose-600 font-semibold">
            Hola, {usuario.displayName}
          </li>
          <li>
            <button
              onClick={cerrarSesion}
              className="px-3 py-1 text-sm bg-rose-500 text-white rounded-md hover:bg-rose-600 transition"
            >
              Cerrar sesión
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarUsuario;
