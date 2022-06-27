import { useSelector } from 'react-redux';

export function useAuth () {
  const sessionAuthToken = sessionStorage.getItem('auth_token');
  const sessionUserEmail = sessionStorage.getItem('email');

  const { email, token, id } = useSelector(state => state.user);

  return {
    isAuth: Boolean(token ?? sessionAuthToken),
    email: email ?? sessionUserEmail,
    token,
    id,
  };
}