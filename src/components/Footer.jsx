
import React from 'react'
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3 ">
            <h5>EcoMarket</h5>
            <p>Tu tienda online favorita.</p>
          </div>

          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Enlaces utiles</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Inicio</Link></li>
              <li><Link to="/productos" className="text-light text-decoration-none">Productos</Link></li>
              <li><Link to="/contacto" className="text-light text-decoration-none">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Seguinos: </h5>
            <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-tiktok"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-youtube"></i></a>
            <a href="#" className="text-light me-3"><i className="bi bi-whatsapp"></i></a>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0 text-info">&copy; {new Date().getFullYear()} EcoMarket. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer;