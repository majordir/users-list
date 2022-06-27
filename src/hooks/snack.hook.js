import { message } from 'antd';

export function handleError (error) {
  switch (error) {
    case 'auth/email-already-in-use':
      return 'Пользователь с таким E-mail уже зарегистрирован';
    case 'auth/wrong-password':
    case 'auth/user-not-found':
      return 'Неверный E-mail или пароль';
    default:
      return 'Неожиданная ошибка от сервера';
  }
}

export function showError (text) {
  message.error(text);
}