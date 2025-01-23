import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { useState } from 'react';

function Main() {
  const handleRefresh = () => {
    const refreshPageButton = document.getElementById('refreshButton');
    if (refreshPageButton) {
      refreshPageButton.addEventListener('click', () => {
        location.reload();
      });
    }
  };

  return (
    <StrictMode>
      <div>
        <button id="refreshButton" onClick={handleRefresh}>Refresh</button>
      </div>
    </StrictMode>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<Main />);
}
