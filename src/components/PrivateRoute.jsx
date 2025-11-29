import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  // Si hay usuario en contexto, renderiza la ruta protegida
  // Si no, redirige al login guardando la ruta original en state
  return user ? children : <Navigate to="/login" state={{ from: location }} replace />;
}