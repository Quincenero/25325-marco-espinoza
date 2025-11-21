import { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const cantidadTotal = carrito.length;

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito, cantidadTotal }}>
      {children}
    </CarritoContext.Provider>
  );
};