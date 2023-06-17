import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookContext, BooksProvider } from "./contexts/bookContext"

export {BookContext}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <BooksProvider>
    <App />
    </BooksProvider>
    </Router>
 
);
