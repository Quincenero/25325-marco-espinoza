import React, {useEffect, useState} from "react";
import { API_URL } from "../api/products.js";
import ProductCard from "../components/ProductCard.jsx";
import CategoryFilter from "../components/CategoryFilter.jsx";

function ProductList(){
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");  

    //Llamado a la API para obtener los productos
    useEffect( () => {
        fetch(API_URL)
        .then((res) => {
            if (!res.ok) throw new Error('Error al obtener los productos');
            return res.json();
        })
        .then((data) => setProductos(data))
        .catch((error) => console.error('Error:', error));
    },[])
    
    // Obtengo las categorias de los productos
    const categorias = ['Todas', ...new Set(productos.map(p => p.category))];  
    const productosFiltrados = 
      categoriaSeleccionada === 'Todas'
        ? productos
        : productos.filter(p => p.category === categoriaSeleccionada);  

  return (
    <div className="container py-4">
      <h2 className="mb-4">Nuestros productos</h2>
      <CategoryFilter
        categorias={categorias}
        categoriaSeleccionada={categoriaSeleccionada}
        onChange={setCategoriaSeleccionada}
      />
      <div className="row">
        {productosFiltrados.map(prod => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
