import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

function Navbar() {
  const { user, signOutUser } = useContext(UserContext);
  const handleLogout = async (e) => {
    try {
      await signOutUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user ? (
        <>
          <NavLink to="/">Inicio</NavLink>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/registro">Registro</NavLink>
        </>
      )}
    </div>
  );
}

export default Navbar;
