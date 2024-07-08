import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function timeFunc() {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

setInterval(timeFunc, 1000);