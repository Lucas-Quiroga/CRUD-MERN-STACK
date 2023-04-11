const express = require("express");
const app = express();

//importar conexión mongoDB
const archivoBD = require("./conexion");

app.get("/", (req, res) => {
  res.end("Bienvenidos al servidor de nodejs");
});

//config server
app.listen(5000, function () {
  console.log("server on port in", 5000);
});
