// Filtro de categorías para la página de productos

function CategoryFilter({ categorias, categoriaSeleccionada, onChange }) {
  return (
    <div className="mb-4 d-flex flex-wrap gap-2">
      {categorias.map(cat => (
        <button
          key={cat}
          className={`btn btn-sm ${
            categoriaSeleccionada === cat ? 'btn-success' : 'btn-outline-success'
          }`}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
