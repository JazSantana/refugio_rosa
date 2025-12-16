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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const registrar = async () => {
    setError("");

    if (!email || !password || !apodo) {
      setError("Completa todos los campos");
      return;
    }

    if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    try {
      setLoading(true);
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      await updateProfile(user, {
        displayName: apodo,
      });

      await user.reload();

      OnRegister?.(auth.currentUser);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado");
      } else if (error.code === "auth/invalid-email") {
        setError("El correo no es válido");
      } else {
        setError("Error al registrar usuario");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-rose-100 to-white p-6">
      <div className="bg-white/70 backdrop-blur-sm shadow-xl rounded-2xl p-8 w-full max-w-md border border-pink-200 space-y-4">
        <h1 className="text-3xl font-bold text-pink-600 text-center mb-4">
          Registrar Usuario
        </h1>

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <input
          className="w-full p-3 border border-pink-300 rounded-xl"
          type="text"
          placeholder="¿Cómo quieres que te llamemos?"
          value={apodo}
          onChange={(e) => setApodo(e.target.value)}
        />

        <input
          className="w-full p-3 border border-pink-300 rounded-xl"
          type="email"
          placeholder="Escribe tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 border border-pink-300 rounded-xl"
          type="password"
          placeholder="Escribe tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className={`w-full mt-4 text-white font-semibold py-3 rounded-xl transition
            ${loading ? "bg-gray-400" : "bg-pink-500 hover:bg-pink-600"}
          `}
          onClick={registrar}
          disabled={loading}
        >
          {loading ? "Creando cuenta..." : "Registrarse"}
        </button>

        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">¿Ya tienes una cuenta?</p>
          <button
            className="text-pink-500 hover:underline font-semibold mt-1"
            onClick={() => navigate("/login")}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegistrarUsuario;
