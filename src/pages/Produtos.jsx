import React, { useState, useEffect } from "react";
import "../styles/Enderecos.css";
import Header from "../componets/Header";
import { jwtDecode } from "jwt-decode";
import FetchHandler from '../services/api/FetchHandler'

const CadastroProduto = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    tipo: "",
    id: ""
  });

  const [formData, setFormData] = useState({
      nome: "",
      descricao: "",
      preco: ""
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
      console.log("logado")
      const decodedToken = jwtDecode(token);
      user.email = decodedToken['email'];
      user.name = decodedToken['nome'];
      user.tipo = decodedToken['tipo'];
      user.id = decodedToken['id'];
      if (user.tipo != 2){
        console.log("401 -Usuário não é Vendedor");
        alert("401 - acesso não autorizado");
      }
      return true
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  
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

    const PRODUTO = {
      nome: formData.nome,
      descricao: formData.descricao,
      preco: formData.preco,
      id_usuario: user.id
    };

    try {
      const FETCH_HANDLER = new FetchHandler();
      const RESPONSE = await FETCH_HANDLER.makeRequest('http://26.193.92.153:80/api/post/produto', 'POST', PRODUTO);
      const VAZIO = "";

      if (RESPONSE.status) {
        alert("Produto salvo com sucesso!");
      } else {
        alert(`Erro ao salvar o produto: ${RESPONSE.message}`);
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
          <h2>Cadastro de Produto</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome do produto:</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="descricao">Descrição:</label>
              <input
                type="text"
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="preco">Preço:</label>
              <input
                type="number"
                id="preco"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Cadastrar Produto</button>
          </form>
        </div>
      </body>
    </>
  );
};

export default CadastroProduto;
