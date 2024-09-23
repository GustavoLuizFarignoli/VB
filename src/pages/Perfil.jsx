import React, { useState } from "react";
import "./Perfil.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Header from "../componets/Header";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Cirilo23",
    password: "********",
    profileImage: "https://via.placeholder.com/150",
    address: "Rua Exemplo, 123, Cidade",
    paymentMethod: "Cartão de Crédito - Visa **** 1234",
  });

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
  const handleSave = () => {
    showNotification("Perfil salvo com sucesso!");
  };

  // Função para deletar o perfil
  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir sua conta?"
    );
    if (confirmDelete) {
      showNotification("Conta excluída com sucesso!");
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
              onChange={handleInputChange} /* Agora é editável */
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputChange} /* Agora é editável */
            />
          </div>
          <div className="button-group">
            <button className="save-button" onClick={handleSave}>
              Salvar
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Excluir a conta
            </button>
          </div>
        </div>

        {/* Seção de Informações Adicionais */}
        <div className="profile-info-section">
          <div className="info-item">
            <span>Endereços:</span>
            <Link to="/alterar-endereco">
              <FaArrowRight />
            </Link>
          </div>
          <div className="info-item">
            <span>Métodos de Pagamento</span>
            <Link to="/alterar-pagamento">
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Notificação */}
        <div className="notification">{notification}</div>
      </div>
    </>
  );
};

export default Profile;
