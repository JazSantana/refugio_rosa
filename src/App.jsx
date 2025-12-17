import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Chat from "./pages/Chat";
import Autocuidado from "./pages/Autocuidado";
import Playlist from "./pages/Playlist";
import RegistrarUsuario from "./components/RegistrarUsuario";
import Login from "./components/Login";
import Pendientes from "./pages/Pendientes";
import ProtectedRoute from "./components/ProtectedRoute";
import Mascota from "./pages/Mascota";
import Campania from "./pages/Campania"


function App() {
  const [usuarioRegistrado, setUsuarioRegistrado] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsuarioRegistrado(user);
      } else {
        setUsuarioRegistrado(null);
      }
    });

    return () => unsub();
  }, [auth]);

  return (
    <>
      <Header usuario={usuarioRegistrado} />
       {/* 🐾 Mascota fija en la esquina */}
    <Mascota />
      <Routes>
        <Route path="/" element={<Inicio usuario={usuarioRegistrado} />} />
        <Route path="/campania" element={<Campania usuario={usuarioRegistrado}/>}></Route>
        <Route path="/chat" element={<Chat usuario={usuarioRegistrado} />} />
        <Route path="/autocuidado" element={<Autocuidado />} />
        <Route
          path="/pendiente"
          element={
            <ProtectedRoute usuario={usuarioRegistrado}>
              <Pendientes />
            </ProtectedRoute>
          }
        />
        <Route path="/playlist" element={<Playlist />} />

       <Route
  path="/login"
  element={
    usuarioRegistrado ? <Inicio /> : (
      <Login
        OnLogin={(userData) => {
          setUsuarioRegistrado(userData);
          navigate("/");
        }}
      />
    )
  }
/>

<Route
  path="/registrarse"
  element={
    usuarioRegistrado ? <Inicio /> : (
      <RegistrarUsuario
        OnRegister={(userData) => {
          setUsuarioRegistrado(userData);
          navigate("/");
        }}
      />
    )
  }
/>

      </Routes>

      <Footer />
    </>
  );
}

export default App;
