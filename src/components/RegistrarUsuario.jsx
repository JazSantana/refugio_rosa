import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

function RegistrarUsuario({ OnRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [apodo, setApodo] = useState("");
  const navigate = useNavigate();

  const registrar = async () => {
    if (!email || !password || !apodo) {
      alert("Completa todos los campos");
      return;
    }

    if (password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      const auth = getAuth();

      const cred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(cred.user, {
        displayName: apodo,
      });

      await cred.user.reload();

      OnRegister(auth.currentUser);
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 p-6">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md space-y-4">
        <h1 className="text-2xl font-bold text-pink-600 text-center">
          Crear cuenta
        </h1>

        <input
          className="w-full p-3 border rounded-xl"
          type="text"
          placeholder="¿Cómo quieres que te llamemos?"
          value={apodo}
          onChange={(e) => setApodo(e.target.value)}
        />

        <input
          className="w-full p-3 border rounded-xl"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 border rounded-xl"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-pink-500 text-white py-3 rounded-xl"
          onClick={registrar}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default RegistrarUsuario;
