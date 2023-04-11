const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");

const objetobd = mongoose.connection;

objetobd.on("connected", () => {
  console.log("conexión establecida a mongodb");
});

objetobd.on("error", () => {
  console.log("error en la conexión a mongodb");
});

module.exports = mongoose;
