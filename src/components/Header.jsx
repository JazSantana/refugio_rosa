import NavbarUsuario from "./navbarUsuario";
import NavbarVisitante from "./navbarVisitante";

function Header({ usuario }) {
  return (
    <>
      {usuario ? (
        <NavbarUsuario usuario={usuario} />
      ) : (
        <NavbarVisitante />
      )}
    </>
  );
}

export default Header;
