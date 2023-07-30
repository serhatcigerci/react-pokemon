import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <div className='background'>
      <div className='container'>
        <div className="pokemon">
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
