import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.totalItems);

  return (
    <header>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/cart">Carrito ({cartItemCount})</Link>
    </header>
  );
};

export default Header;
