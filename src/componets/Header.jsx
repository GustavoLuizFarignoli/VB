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
            <Link to="/Home" className="logo-link">
              <h1 className="logo-text">Billig Kjop</h1>
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
            <Link to="/perfil">
              <img src={ciriloImg} alt="Cirilo" className="Image-Cirilo" />
            </Link>
            <Link to="/perfil">
              <span className="Perfil">Perfil</span>
            </Link>

            <img
              src="src\assets\shopping-basket.svg.svg"
              alt="Carrinho de compras"
              className="shopping-cart-icon"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
