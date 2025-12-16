import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import "./Header.css";

function NavbarUsuario() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuario(user); 
      } else {
        setUsuario(null);
      }
    });

    return () => unsub();
  }, [auth]);

  const cerrarSesion = async () => {
    await signOut(auth);
    sessionStorage.removeItem("mensajeBienvenida");
    navigate("/");
  };

  const nombre = usuario?.displayName || "Invitada";

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
          <li className="usuario-nombre">Hola, {nombre}</li>

          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/autocuidado">Autocuidado</Link>
          </li>
          <li>
            <Link to="/playlist">Playlist</Link>
          </li>

          <li
            onClick={cerrarSesion}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            Cerrar sesión
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavbarUsuario;
