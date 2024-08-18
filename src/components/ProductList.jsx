import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

const ProductList = () => {
  const dispatch = useDispatch();
  const plants = [
    { id: 1, name: 'Aloe Vera', price: 10, category: 'Suculentas', image: 'aloe-vera.jpg' },
    { id: 2, name: 'Peace Lily', price: 15, category: 'Plantas de sombra', image: 'peace-lily.jpg' },
    // Añadir más plantas...
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-item">
          <img src={`/images/${plant.image}`} alt={plant.name} />
          <h3>{plant.name}</h3>
          <p>{plant.price} USD</p>
          <button onClick={() => handleAddToCart(plant)}>Añadir a la cesta</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
