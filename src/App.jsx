import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import ProductList from "./pages/ProductList";
import ContactoForm from "./pages/ContactoForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Perfil from "./components/Perfil";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ProductList />} />
            <Route path="/contacto" element={<ContactoForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Register />} />

            {/* Rutas protegidas */}
            <Route
              path="/perfil/:id"
              element={
                <PrivateRoute>
                  <Perfil />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;