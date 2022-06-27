import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

function Home() {
  const navigate = useNavigate();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (!isAuth)
      navigate('/login');
    else
      navigate("/users");
  }, [isAuth, navigate]);
}

export default Home;
