import fetch from "node-fetch";
import React, { useState } from "react";
import uniqid from "uniqid";

const AgregarUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  async function agregarUsuario() {
    const usuario = {
      nombre: nombre,
      email: email,
      telefono: telefono,
      idusuario: uniqid(),
    };
    console.log(usuario);

    try {
      const response = await fetch("/api/usuario/agregarusuario", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error("Error al agregar el usuario");
      }

      const data = await response.json();

      alert(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-4">Crear un nuevo usuario</h2>
      </div>
      <div className="row">
        <div className="col-sm-6 offset-3">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name=""
              id=""
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="telefono" className="form-label">
              Teléfono
            </label>
            <input
              type="text"
              name=""
              id=""
              className="form-control"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <button onClick={agregarUsuario} className="btn btn-success">
            Guardar Usuario
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgregarUsuario;
