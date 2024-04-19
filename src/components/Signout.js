import React from 'react';
import { useAuth } from './AuthContext';

const Signout = () => {
  const { signout } = useAuth();

  const handleSignout = () => {
    signout();
  };

  return <button id="signout" onClick={handleSignout}>Signout</button>;
};

export default Signout;