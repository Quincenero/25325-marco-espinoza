import React, { useState } from "react";

export default function ContactoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 500);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Contacto</h2>
      <div className="row">
        <div className="col-md-6">
          <form
            action="https://formspree.io/f/mpwnwbog"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Correo Electrónico</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="correo electrónico"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                placeholder="escribe tu mensaje aquí"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-success w-50 mt-3">Enviar</button>
          </form>
        </div>

        {/* Dirección */}
        <div className="col-md-6">
          <h5 className="mb-3">Nuestra dirección</h5>
          <p>
            EcoMarket<br />
            Av. Corrientes 3250<br />
            Ciudad Autonoma de Buenos Aires, Argentina
          </p>

          {/* Mapa de Google */}
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.71570860034!2d-58.42054592446828!3d-34.58637227296213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8e6e2e87a3%3A0x8e1f514c1b6c9a0f!2sAv.%20Corrientes%203255%2C%20C1193%20CABA!5e0!3m2!1ses!2sar!4v1693425678901!5m2!1ses!2sar"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa EcoMarket"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}