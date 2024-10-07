import React, { useState } from "react";
import "./Enderecos.css";
import Header from "../componets/Header";

const CadastroEndereco = () => {
  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    cidade: "",
    estado: "",
    cep: "",
    complemento: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o envio dos dados API
    console.log("Dados do endereço:", formData);
  };

  return (
    <>
      <Header />
      <body>
        <div className="cadastro-endereco-container">
          <h2>Cadastro de Endereço</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="rua">Rua:</label>
              <input
                type="text"
                id="rua"
                name="rua"
                value={formData.rua}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numero">Número:</label>
              <input
                type="text"
                id="numero"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <input
                type="text"
                id="cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="estado">Estado:</label>
              <input
                type="text"
                id="estado"
                name="estado"
                value={formData.estado}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cep">CEP:</label>
              <input
                type="text"
                id="cep"
                name="cep"
                value={formData.cep}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="complemento">Complemento (opcional):</label>
              <input
                type="text"
                id="complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Cadastrar Endereço</button>
          </form>
        </div>
      </body>
    </>
  );
};

export default CadastroEndereco;
