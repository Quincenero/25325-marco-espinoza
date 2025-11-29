import React from "react";
import { useCarrito } from "../context/CarritoContext";

function ProductCard({ id, name, description, image, price, stock }) {
  const { addItem } = useCarrito();

  const handleAddToCart = () => {
    if (stock > 0) {
      addItem({
        id,
        name,
        price,
        image,
        quantity: 1,
      });
    }
  };

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100 shadow-sm d-flex flex-column">
        <img
          src={image}
          className="card-img-top object-fit-cover"
          alt={name}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <p
            className={`mb-2 fw-bold ${
              stock === 0
                ? "text-danger"
                : stock <= 5
                ? "text-warning"
                : "text-success"
            }`}
          >
            {stock === 0 ? "Agotado" : `Stock: ${stock}`}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <span className="fw-bold text-success">${price.toFixed(2)}</span>
            <button
              className="btn btn-outline-success btn-sm"
              onClick={handleAddToCart}
              disabled={stock === 0}
            >
              🛒 Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;