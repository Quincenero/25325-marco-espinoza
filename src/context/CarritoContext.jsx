import React, { createContext, useState, useContext, useEffect } from "react";

const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  // Inicializar carrito desde localStorage
  const [items, setItems] = useState(() => {
    const storedCart = localStorage.getItem("carrito");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Guardar cambios en localStorage cada vez que items cambie
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(items));
  }, [items]);

  // Agregar producto
  const addItem = (item) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      return [...prev, item];
    });
  };

  // Actualizar cantidad
  const updateQuantity = (id, quantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Eliminar producto
  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Vaciar carrito
  const clearCart = () => {
    setItems([]);
  };

  // Calcular subtotal
  const getSubtotal = (item) => item.price * item.quantity;

  return (
    <CarritoContext.Provider
      value={{ items, addItem, updateQuantity, removeItem, clearCart, getSubtotal }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);