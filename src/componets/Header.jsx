import React from "react";
import "./Header.css";
import ciriloImg from "../image/Cirilo.jpg";
import logo from "../image/logosemfundo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="Main-Header">
          <div className="Logo">
            <Link to="/Home">
              <img src={logo} alt="Logo" className="Image-Logo" />
            </Link>
          </div>
          <div>
            <input
              type="text"
              id="Input-Products"
              name="as_word"
              placeholder="Buscar produtos"
              className="Input-Products"
            />
          </div>
          <div>
            <Link to="/Login">
              <img src={ciriloImg} alt="Cirilo" className="Image-Cirilo" />
            </Link>
            <span className="NomeDoPerfil">Celenio</span>
            <Link to="/Perfil">
              <span className="Perfil">Perfil</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
