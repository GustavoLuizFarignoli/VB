import Header from "../componets/Header";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <form className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Usuário" required />
          <input type="password" placeholder="Senha" required />
          <button type="submit">Entrar</button>
          <p>
            Não tem uma conta? <Link to="/Cadastro">Cadastre-se aqui</Link>
          </p>
          <p>
            <Link to="/ReedefinirSenha">Esqueci minha senha</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
