import React, { useState, useEffect } from "react";
import "../styles/Perfil.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Header from "../componets/Header";
import { jwtDecode } from "jwt-decode";
import FetchHandler from '../services/api/FetchHandler'

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    profileImage: "https://via.placeholder.com/150",
    address: "Rua Exemplo, 123, Cidade",
    paymentMethod: "Cartão de Crédito - Visa **** 1234",
  });

  function isAuthenticated() {
    const token = localStorage.getItem('LoginToken');
    console.log(token)

    if (token === 'undefined' || token === null) {
      console.log("Token Não Existe");
      alert("Você precisa estar logado para acessar o perfil");
      //window.location.href = '/Login';
      return false;
    } else {
      console.log("Logado");
      const decodedToken = jwtDecode(token);
      setUser(prevUser => ({
        ...prevUser,
        email: decodedToken['email'],
        name: decodedToken['nome']
      }));
      
      return true
    }
  };

  useEffect(() => {
    isAuthenticated();
  }, []);
  
  const [notification, setNotification] = useState("");

  // Função para exibir a notificação por alguns segundos
  const showNotification = (message) => {
    setNotification(message);
    const notificationElement = document.querySelector(".notification");
    notificationElement.style.display = "block";
    setTimeout(() => {
      notificationElement.style.display = "none";
    }, 3000);
  };

  // Função para lidar com a edição dos campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // Função para salvar as alterações
  const handleSave = async () => {
    const USUARIO = {
      nome: user.name,
      email: user.email
    };

    try {
      const FETCH_HANDLER = new FetchHandler();
      const RESPONSE = await FETCH_HANDLER.makeRequest('http://26.193.92.153:80/api/put/usuario', 'PUT', USUARIO);
      const VAZIO = "";

      //Esse If não está funcionando, mesmo dando erro no back ele da alert endereço salvo com sucesso 
      if (RESPONSE.status) {
        console.table(RESPONSE);
        localStorage.setItem('LoginToken', RESPONSE.token);
        showNotification("Perfil salvo com sucesso!");
      } else {
        alert(`Erro ao salvar alterações: ${RESPONSE.message}`);
      }

    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na conexão com o servidor.');
    }
  };

  // Função para deletar o perfil
  const handleDelete = async () => {
    const USUARIO = {
      nome: user.name,
      email: user.email
    };
    try {
      const FETCH_HANDLER = new FetchHandler();
      const RESPONSE = await FETCH_HANDLER.makeRequest('http://26.193.92.153:80/api/delete/usuario', 'DELETE', USUARIO);
      const VAZIO = "";

      console.log("Resposta:" . RESPONSE)

      if (RESPONSE.status) {
        console.table(RESPONSE);
        showNotification("Conta excluída com sucesso!");
        localStorage.removeItem('LoginToken');
      } else {
        alert(`Erro ao excluir conta: ${RESPONSE.message}`);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na conexão com o servidor.');
    }
  };

  return (
    <>
      <Header />
      <div className="profile-container">
        {/* Seção de Detalhes do Perfil */}
        <div className="profile-details-section">
          <img
            src={user.profileImage}
            alt="Imagem de Perfil"
            className="profile-image"
          />
          <div className="input-group">
            <label>Nome do usuário</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-group">
            <button className="save-button" onClick={handleSave}>
              Salvar
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Excluir a conta
            </button>
            <button className="delete-button" onClick={isAuthenticated}>
              Teste Token
            </button>
          </div>
        </div>

        <div className="profile-info-section">
          <div className="info-item">
            <Link to="/Enderecos">
              <span>Endereços</span>
            </Link>
            <FaArrowRight />
          </div>
          <div className="info-item">
            <Link to="/alterar-pagamento">
              <span>Métodos de Pagamento</span>
            </Link>
            <FaArrowRight />
          </div>
        </div>

        <div className="notification">{notification}</div>
      </div>
    </>
  );
};

export default Profile;
