import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/userSlice';
import { handleError, showError } from '../../hooks/snack.hook';

import './Register.css';

function Register () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
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
  }

  return (
    <div className="register">
      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder="E-mail"
        />
        <input
          type="password"
          className="register__textBox"
          value={ password }
          onChange={ (e) => setPassword(e.target.value) }
          placeholder="Пароль"
        />
        <button className="register__btn" onClick={ handleRegister }>
          Зарегистрироваться
        </button>
        <div>
          Уже есть аккаунт? <Link to="/login">Войти</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
