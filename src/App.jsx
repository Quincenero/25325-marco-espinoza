import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { CarritoProvider } from "./context/CarritoContext"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import ProductList from "./pages/ProductList";
import ContactoForm from "./pages/ContactoForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Perfil from "./components/Perfil";
import Cart from "./components/Carrito"; 
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              {/* Rutas públicas */}
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<ProductList />} />
              <Route path="/contacto" element={<ContactoForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              {/* Rutas protegidas */}
              <Route
                path="/perfil/:id"
                element={
                  <PrivateRoute>
                    <Perfil />
                  </PrivateRoute>
                }
              />
              <Route
                path="/Carrito"
                element={
                  <PrivateRoute>
                    <Cart />
                  </PrivateRoute>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;