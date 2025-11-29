import React from "react";
import { useCarrito } from "../context/CarritoContext";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { items, updateQuantity, removeItem, getSubtotal, clearCart } = useCarrito();

  if (!items || items.length === 0) {
    return (
      <div className="container mt-4 text-center">
        <h4>🛒 Tu carrito está vacío</h4>
        <Link to="/productos" className="btn btn-success mt-3">
          Seguir comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito</h2>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Producto</th>
            <th>Precio unitario</th>
            <th>Cantidad</th>
            <th>Subtotal</th>
            
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "60px", height: "60px", objectFit: "cover" }}
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() =>
                      updateQuantity(item.id, Math.max(item.quantity - 1, 1))
                    }
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </td>
              <td>${getSubtotal(item).toFixed(2)}</td>
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="d-flex justify-content-between mt-3">
        <Button variant="danger" onClick={clearCart}>
          Vaciar carrito
        </Button>
        <Link to="/productos" className="btn btn-success">
          Seguir comprando
        </Link>
        <h4>
          Total: $
          {items.reduce((acc, item) => acc + getSubtotal(item), 0).toFixed(2)}
        </h4>
      </div>
    </div>
  );
}