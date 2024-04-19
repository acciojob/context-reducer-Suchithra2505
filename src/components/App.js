//<p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
// App.js
import React from 'react';
import { AuthProvider } from './AuthContext';
import Login from './Login';
import Signout from './Signout';
import ShoppingList from './ShoppingList';

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Login />
        <Signout />
        <ShoppingList />
      </div>
    </AuthProvider>
  );
};

export default App;
