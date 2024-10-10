import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Header from '../componets/Header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    
    const USUARIO = {
      email: email,
      senha: senha
    };

    const CONFIG_REQUEST = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(USUARIO),
    }

    try {
      const RESPONSE = await fetch('http://26.193.92.153:80/api/login', CONFIG_REQUEST).then(
        (response) => {
          if (response.ok) {
            alert('Login realizado com sucesso com sucesso!');
            //window.location.replace("/Home");
            return response.json();
          }
          if (response.status == 401) {
            alert('Senha Incorreta');
          } else if (response.status == 404) {
            alert('E-mail não cadastrado, Gostaria de Fazer seu Cadastro ?');
          } 
          else {
            alert("Erro desconhecido");
          }
          return "";
        }
      ).then((data) => {
        console.table(data);
        localStorage.setItem('LoginToken', data);
      });
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na conexão com o servidor.');
    }
  };

  return (
    <>
      <Header />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
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