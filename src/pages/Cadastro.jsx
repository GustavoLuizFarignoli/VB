import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cadastro.css';
import Header from '../componets/Header';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const usuario = {
      nome: nome,
      email: email,
      senha: senha
    };


    console.log(usuario);
    try {
      const response = await fetch('http://127.0.0.1:80/api/post/usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!');
        // Aqui você pode redirecionar o usuário ou limpar o formulário
      } else {
        alert('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      alert('Erro na conexão com o servidor.');
    }
  };

  return (
    <>
      <Header />
      <div className="cadastro-container">
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <h2>Cadastro</h2>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirme a Senha"
            value={confirmaSenha}
            onChange={(e) => setConfirmaSenha(e.target.value)}
            required
          />
          <button type="submit">Cadastrar</button>
          <p>
            Já tem uma conta? <Link to="/login">Faça login aqui</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Cadastro;