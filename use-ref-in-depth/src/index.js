import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Basic from './Basic';
import AvoidState from './AvoidState';
import RefVsState from './RefVsState';
import PreviousValue from './PreviousValue';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    // <Basic />
    // <AvoidState />
    // <RefVsState />
    <PreviousValue />
  // </React.StrictMode>
);
