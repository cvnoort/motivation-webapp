import './index.css';
import TextQuotes from "./Message";
import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  
  return (
    <> 
      <TextQuotes/> 
    </>
  );
}

export default App;
