import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './components/Inicio'
import ProductList from './components/ProductList'
import ContactoForm from './components/ContactoForm'


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/productos" element={<ProductList />} />
          <Route path="/contacto" element={<ContactoForm />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App