import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/actions';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalCost = useSelector((state) => state.cart.totalCost);
  const dispatch = useDispatch();

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      <p>Total de plantas: {cartItems.length}</p>
      <p>Costo total: {totalCost} USD</p>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={`/images/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price} USD</p>
          <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
        </div>
      ))}
      <button onClick={() => alert('Próximamente...')}>Pagar</button>
      <button onClick={() => window.location.href = '/products'}>Continuar comprando</button>
    </div>
  );
};

export default Cart;
