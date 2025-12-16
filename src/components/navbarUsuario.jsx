import { Link, useNavigate } from "react-router-dom";
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
          <li><Link to="/" className="active">Inicio</Link></li>
          <li><Link to="/chat">Chat</Link></li>
          <li><Link to="/autocuidado">Autocuidado</Link></li>
          <li><Link to="/playlist">Playlist</Link></li>
          {usuario && (
            <li><Link to="/pendiente">Pendientes</Link></li>
          )}
          <li className="usuario-nombre" style={{ color: "#D21E63" }}>
            Hola, {usuario.displayName}
          </li>
          <li 
            onClick={cerrarSesion} 
            style={{ 
              cursor: "pointer", 
              fontWeight: "bold", 
              backgroundColor: "#F06292", 
              color: "white", 
              padding: "6px 12px", 
              borderRadius: "8px", 
              fontSize: "14px" // Tamaño de la fuente más pequeño
            }}
          >
            Cerrar sesión
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarUsuario;
