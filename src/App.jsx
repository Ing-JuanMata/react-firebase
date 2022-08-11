import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { UserContext } from './context/UserProvider';

function App() {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <h1>App</h1>
      <Outlet />
    </div>
  );
}

export default App;
