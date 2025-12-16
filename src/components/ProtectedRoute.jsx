import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const [usuario, setUsuario] = useState(undefined);

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsub();
  }, []);

  if (usuario === undefined) return null; 
  if (!usuario) return <Navigate to="/login" />;

  return children;
}
