import './index.css';
import './App.css';
import TextQuotes from './TextQuotes';
import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <> 
      <nav>
      <h1 className="title">Get Inspired</h1>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="motivational">Motivational</option>
        <option value="inspirational">Inspirational</option>
      </select>
      <button className="refresh-button" onClick={handleRefresh}>Get Inspired Today!</button>
      </nav>
      <TextQuotes category={category} />
    </>
  );
}

export default App;



