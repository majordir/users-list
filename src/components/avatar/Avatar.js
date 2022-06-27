import { UserOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../../store/userSlice';

function Avatar ({ email }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(removeUser());
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('email');
    navigate('/');
  };

  const menu = (
    <Menu
      onClick={handleSignOut}
      items={[
        {
          label: 'Выйти',
          key: '1'
        }
      ]}
    />
  );

  return (
    <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
      {email}
    </Dropdown.Button>
  )
}

export default Avatar;