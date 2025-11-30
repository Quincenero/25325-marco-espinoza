
import React from 'react'

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
            <h5>Enlaces utiles</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Inicio</a></li>
              <li><a href="/productos" className="text-light text-decoration-none">Productos</a></li>
              <li><a href="/contacto" className="text-light text-decoration-none">Contacto</a></li>
            </ul>
          </div>
          
          <div className="col-md-4 mb-3">
            <h5>Seguinos: </h5>
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