

import React, { useState, useContext } from 'react';

// Create a context for managing user authentication state
const AuthContext = React.createContext();

// Component for the main application
const App = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  // Function to handle login
  const login = () => {
    setCurrentUser('rohan');
    setIsAuthenticated(true);
  };

  // Function to handle signout
  const signout = () => {
    setCurrentUser('');
    setIsAuthenticated(false);
  };

  // Function to handle adding an item
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue('');
  };

  // Function to handle removing an item
  const removeItem = (itemName) => {
    setItems(items.filter(item => item !== itemName));
  };

  // Function to handle clearing the list
  const clearList = () => {
    setItems([]);
  };

  return (
    <div>
      <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>

      <button id="login-btn" onClick={login}>Login</button>
      <button id="signout" onClick={signout}>Signout</button>
      <div id="current-user">Current user: {isAuthenticated ? currentUser : ''}, isAuthenticated: {isAuthenticated ? 'Yes' : 'No'}</div>
      <input id="shopping-input" type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
            <button id={`remove-${item}`} onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button id="clear-list" onClick={clearList}>Clear</button>
    </div>
  );
};

export default App;
