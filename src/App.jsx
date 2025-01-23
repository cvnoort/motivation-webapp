import './App.css';
import './index.css';
import TextQuotes from './TextQuotes';
import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  return (
    <> 
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="motivational">Motivational</option>
        <option value="inspirational">Inspirational</option>
      </select>
      <TextQuotes category={category}/> 
    </>
  );
}

export default App;