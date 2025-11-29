import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    // Validación simple
    if (!name || !email || !password) {
      setError("Por favor completa todos los campos obligatorios.");
      return;
    }

    try {
      const newUser = await register({
        name,
        email,
        password,
        avatar: avatar || "https://i.pravatar.cc/150", // placeholder para avatar
        role: "cliente",
      });
      navigate(`/perfil/${newUser.id}`);
    } catch (err) {
      setError("Hubo un problema al crear la cuenta.", err);
    }
  };

  return (
    <Container className="mt-5" style={{ maxWidth: 400 }}>
      <h2>Registrarse</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Avatar (opcional)</Form.Label>
          <Form.Control
            type="text"
            value={avatar}
            onChange={e => setAvatar(e.target.value)}
            placeholder="URL de tu foto"
          />
        </Form.Group>
        <Button
          className="mb-3"
          variant="success"
          onClick={handleRegister}
        >
          Crear cuenta
        </Button>
      </Form>
    </Container>
  );
}