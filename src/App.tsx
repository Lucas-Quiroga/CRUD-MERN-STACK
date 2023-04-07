import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaUsuarios from "./ListaUsuarios";
import AgregarUsuario from "./AgregarUsuario";
import EditarUsuario from "./EditarUsuario";

function App() {
  return (
    <div className="App">
      <h1>CRUD MERN STACK</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListaUsuarios />}></Route>
          <Route path="/agregarusuario" element={<AgregarUsuario />}></Route>
          <Route path="/editarusuario" element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
