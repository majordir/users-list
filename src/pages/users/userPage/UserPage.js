import React from "react";
import { useSearchParams } from 'react-router-dom';

function UserPage () {
  //TODO: запрос на получение информации о пользователе
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('id');

  return (
    <div>{userId}</div>
  );
}

export default UserPage;
