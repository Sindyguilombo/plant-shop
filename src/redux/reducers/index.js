// src/redux/reducers/index.js

import { combineReducers } from 'redux';
import cartReducer from '../cartReducer'; // Asegúrate de que la ruta sea correcta

const rootReducer = combineReducers({
  cart: cartReducer,
  // Aquí puedes agregar otros reducers si tienes más
});

export default rootReducer;
