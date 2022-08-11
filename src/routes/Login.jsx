import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Login() {
  const { user, setUser } = useContext(UserContext);
  const navegate = useNavigate();

  const handleLogin = () => {
    setUser(true);
    navegate('/');
  };
  return (
    <>
      <h1>Login</h1>
      <h2>{user ? 'online' : 'offline'}</h2>
      <button onClick={handleLogin}>Acceder</button>
    </>
  );
}

export default Login;
