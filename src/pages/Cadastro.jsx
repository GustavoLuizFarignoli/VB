import { Link } from 'react-router-dom';
import './Cadastro.css';
import Header from '../componets/Header';

const Cadastro = () => {
  return (
    <>
    <Header />
    <div className="cadastro-container">
          <form className="cadastro-form">
              <h2>Cadastro</h2>
              <input type="text" placeholder="Nome" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Senha" required />
              <input type="password" placeholder="Confirme a Senha" required />
              <button type="submit">Cadastrar</button>
              <p>
                  Já tem uma conta? <Link to="/login">Faça login aqui</Link>
              </p>
          </form>
      </div></>
  );
};

export default Cadastro