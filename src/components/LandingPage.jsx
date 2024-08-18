import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: 'url("/images/background.jpg")' }}>
      <h1>My Plant Shop</h1>
      <p>Bienvenido a My Plant Shop, tu tienda de plantas de interior de confianza.</p>
      <Link to="/products">
        <button>Comenzar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
