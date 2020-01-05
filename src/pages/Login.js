import React, { useState } from 'react';
import './Login.css'; 

import logo from '../assets/logo.svg';

export default function Login({ history }) {
  const [userName, setUserName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(userName);

    history.push('/main');
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="TinDev" />
        <input
          placeholder="Digite seu usuário do GitHub"
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}