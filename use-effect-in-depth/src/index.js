import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Parent from './Parent';
import Dependencies from './Dependencies';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    // <Parent />
    <Dependencies />
);
