import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { handleError, showError } from '../../hooks/snack.hook';

import './Login.css';

function Login () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        sessionStorage.setItem('auth_token', user.accessToken);
        sessionStorage.setItem('email', user.email);
        navigate('/');
      })
    .catch(error => {
      const errorText = handleError(error.code);
      showError(errorText);
    });
  };

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="E-mail"
        />
        <input
          type="password"
          className="login__textBox"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Пароль"
        />
        <button onClick={ handleLogin }>Войти</button>

        <div>
          <span>Нет аккаунта?</span>
          <Link to="/register">Зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
