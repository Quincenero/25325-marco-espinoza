
function Inicio() {
  return (
    <main className="flex-grow-1">
      <section
        className="d-flex align-items-center justify-content-center text-white text-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606444949857-80ef2c467a54?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px'
        }}
      >
        <div className="bg-dark bg-opacity-10 p-5 rounded">
          <h1 className="display-4">Bienvenido a EcoMarket</h1>
          <p className="lead">Productos sostenibles para un futuro más verde</p>
          <a href="/productos" className="btn btn-success btn-lg mt-3">
            Ver productos
          </a>
        </div>
      </section>

      <section className="container py-5">
        <div className="row text-center align-items-center">
          <div className="col-md-4">
            <i className="bi bi-leaf fs-1 text-success mb-3"></i>
            <h5>Eco-amigable</h5>
            <p>Reducimos el impacto ambiental con cada producto que vendemos.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-box-seam fs-1 text-success mb-3"></i>
            <h5>Empaque reciclable</h5>
            <p>Usamos materiales biodegradables y reciclables en cada envío.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-people fs-1 text-success mb-3"></i>
            <h5>Comercio justo</h5>
            <p>Apoyamos a productores locales y prácticas éticas de trabajo.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Inicio