import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCarrito } from "../context/CarritoContext";

export default function AppNavbar() {
  const { user, logout } = useAuth();
  const { items } = useCarrito();

  // Calcular cantidad total de productos en el carrito
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand
          className="fw-bold fs-2 py-1 text-success"
          as={Link}
          to="/"
        >
          <i className="bi bi-tree-fill text-success fs-2" aria-label="EcoMarket logo"></i>
          EcoMarket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

            {/* Carrito con badge dinámico */}
            <Nav.Link as={Link} to="/Carrito" className="position-relative">
              🛒 Carrito
              {totalItems > 0 && (
                <Badge
                  bg="success"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                >
                  {totalItems}
                </Badge>
              )}
            </Nav.Link>

            {!user ? (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to={`/perfil/${user.id}`}>
                  <span className="fw-bold text-success">
                    Bienvenido, {user.name}
                  </span>
                </Nav.Link>
                <Nav.Link onClick={logout}>Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}