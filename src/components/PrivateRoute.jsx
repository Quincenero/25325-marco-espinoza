import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  // Si hay usuario en contexto, renderiza la ruta protegida
  return user ? children : <Navigate to="/login" />;
}