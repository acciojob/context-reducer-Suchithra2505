import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const ShoppingList = () => {
  const { currentUser } = useAuth();
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = (itemName) => {
    setItems(items.filter(item => item !== itemName));
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div>
      <div id="current-user">Current user: {currentUser}, isAuthenticated: {currentUser ? 'Yes' : 'No'}</div>
      <input id="shopping-input" type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>Add</button>
      <button id="clear-list" onClick={handleClear}>Clear</button>
      <ul>
        {items.map((item, index) => (
          <li key={`item-${index}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;