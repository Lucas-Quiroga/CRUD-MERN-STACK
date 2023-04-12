//crear un esquema de datos de usuario y un modelo de datos de usuario en una aplicación web.
const express = require("express");
//Esto permite definir rutas específicas para la aplicación web.
const router = express.Router();

const mongoose = require("mongoose");
//mongoose.Schema es una clase de Mongoose que se utiliza para definir la estructura y los tipos de datos de un esquema de documento en una base de datos MongoDB.
const eschema = mongoose.Schema;

//Cuando se crea un esquema de datos en Mongoose, se especifican los campos que se almacenarán en un documento de la base de datos y los tipos de datos que se esperan en cada campo. mongoose.Schema se utiliza para definir y configurar el esquema de un documento de MongoDB, y se pueden especificar varios tipos de datos para cada campo, como String, Number, Date, Boolean, Object, Array, entre otros.
const eschemausuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idUsuario: String,
});

//Este modelo se utilizará para interactuar con la base de datos MongoDB y realizar operaciones CRUD (crear, leer, actualizar, eliminar) en los datos de usuario.
//Finalmente, se crea un modelo "ModeloUsuario" que utilizará el esquema "eschemausuario".
const ModeloUsuario = mongoose.model("usuarios", eschemausuario);

//capturamos los datos del cliente
router.post("/agregarusuario", (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario,
  });
  nuevousuario.save(function (err) {
    if (!err) {
      res.send("Usuario agregado correctamente");
    } else {
      res.send(err);
    }
  });
});

module.exports = router;
