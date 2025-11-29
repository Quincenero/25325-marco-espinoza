// src/components/Perfil.jsx
import { useEffect, useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { getUserById } from "../api/users";

export default function Perfil() {
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState(user);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      getUserById(user.id).then(data => setUserData(data));
    }
  }, [user]);

  const handleSave = async () => {
    const res = await fetch(`https://690e6475bd0fefc30a045746.mockapi.io/users/${userData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    // Editar tu perfil
    const updated = await res.json();
    setUserData(updated);
    setEditMode(false);
    alert("Perfil actualizado correctamente");
  };

  if (!userData) {
    return (
      <Container className="mt-5">
        <h2>No hay usuario logueado</h2>
      </Container>
    );
  }

  return (
    <Container className="mt-5" style={{ maxWidth: 500 }}>
      <Card>
        <Card.Img variant="top" src={userData.avatar} />
        <Card.Body>
          <Card.Title>Perfil de Usuario</Card.Title>

          {editMode ? (
            <>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.name}
                  onChange={e => setUserData({ ...userData, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Avatar URL</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.avatar}
                  onChange={e => setUserData({ ...userData, avatar: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rol</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.role}
                  onChange={e => setUserData({ ...userData, role: e.target.value })}
                />
              </Form.Group>
              <Button variant="success" onClick={handleSave}>Guardar cambios</Button>
              <Button variant="secondary" className="ms-2" onClick={() => setEditMode(false)}>Cancelar</Button>
            </>
          ) : (
            <>
              <Card.Text><strong>ID:</strong> {userData.id}</Card.Text>
              <Card.Text><strong>Email:</strong> {userData.email}</Card.Text>
              <Card.Text><strong>Nombre:</strong> {userData.name}</Card.Text>
              <Card.Text><strong>Rol:</strong> {userData.role}</Card.Text>
              <Card.Text><strong>Creado:</strong> {new Date(userData.createdAt).toLocaleDateString()}</Card.Text>
              <Button variant="primary" onClick={() => setEditMode(true)}>Editar perfil</Button>
              <Button variant="danger" className="ms-2" onClick={logout}>Cerrar sesión</Button>
            </>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
}