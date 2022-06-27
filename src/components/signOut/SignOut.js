import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

function SignOut () {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate('/');
  };

  return (
    <Button onClick={ () => handleSignOut }>Выйти</Button>
  )
}

export default SignOut;