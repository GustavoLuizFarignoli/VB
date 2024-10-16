import React, { useState } from "react";
import "../styles/Enderecos.css";
import Header from "../componets/Header";
import { jwtDecode } from "jwt-decode";
import FetchHandler from '../services/api/FetchHandler'

const CadastroEndereco = () => {
  const [user, setUser] = useState({
    name: "",
    email: ""
  });

  const [formData, setFormData] = useState({
    rua: "",
    numero: "",
    cidade: "",
    estado: "",
    cep: "",
    complemento: "",
  });

  const [notification, setNotification] = useState("");

  function isAuthenticated() {
    const token = localStorage.getItem('LoginToken');
    if (token === 'undefined' || token === null) {
      console.log("Token Não Existe");
      alert("Você precisa estar logado para acessar o cadasto de endereços");
      window.location.href = '/Login';
      return false;
    } else {
      const decodedToken = jwtDecode(token);
      user.email = decodedToken['email'];
      user.name = decodedToken['nome'];
      return true
    }
  };

  isAuthenticated();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("Dados do endereço:", formData);

    const ENDERECO = {
      rua: formData.rua,
      numero: formData.numero,
      cidade: formData.cidade,
      estado: formData.estado,
      cep: formData.cep,
      pais: formData.pais,
      complemento: formData.complemento,
    };

    try {
      const FETCH_HANDLER = new FetchHandler();
      const RESPONSE = await FETCH_HANDLER.makeRequest('http://26.193.92.153:80/api/post/endereco', 'POST', ENDERECO);
      const VAZIO = "";

      if (RESPONSE.status) {
        alert("Endereço salvo com sucesso!");
      } else {
        alert(`Erro ao salvar o endereço: ${RESPONSE.message}`);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na conexão com o servidor.');
    }

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
              <label htmlFor="pais">Pais:</label>
              <input
                type="text"
                id="pais"
                name="pais"
                value={formData.pais}
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
