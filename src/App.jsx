import "./styles/App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Navbar from "./componets/Navbar";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Perfil from "./pages/Perfil.jsx";
import Endereco from "./pages/Enderecos.jsx";
import ReedefinirSenha from "./pages/ReedefinirSenha.jsx";
import Produtos from "./pages/Produtos.jsx";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/enderecos" element={<Endereco />} />
          <Route path="/redefinir" element={<ReedefinirSenha />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
