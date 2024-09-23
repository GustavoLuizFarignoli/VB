import { Link } from "react-router-dom";

import React from "react";

const Navbar = () => {
  return (
    <nav>
      <Link to="/Home"></Link>
      <Link to="/Login"></Link>
      <Link to="/Cadastro"></Link>
      <Link to="/Perfil"></Link>
    </nav>
  );
};

export default Navbar;
