import React from 'react';
import './styles.css';

function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-title">
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
}

export default Card;
