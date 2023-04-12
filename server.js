const express = require("express");
const app = express();

//importar conexión mongoDB
const archivoBD = require("./conexion");

//importación del archivo de rutas y modelo usuario
const rutausuario = require("./rutas/usuario");

//Importar body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));

app.use("/api/usuario", rutausuario);

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor de nodejs");
});

//config server
app.listen(5000, function () {
  console.log("server on port in", 5000);
});
