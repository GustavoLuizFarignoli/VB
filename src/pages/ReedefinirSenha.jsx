import React, { useState } from "react";
import "./ReedefinirSenha.css";
import Header from "../componets/Header";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de redefinição de senha.
    alert(`Um link de redefinição de senha foi enviado para: ${email}`);
  };

  return (
    <>
      <Header />
      <div className="reset-password-container">
        <div className="content">
          <form className="reset-password-form" onSubmit={handleSubmit}>
            <label className="email">Email: </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="buttons">
              <Link to="/Login">Voltar</Link>
              <button type="submit" className="reset-btn">
                Redefinir Senha
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
