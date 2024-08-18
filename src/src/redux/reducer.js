const initialState = {
    items: [],
    totalItems: 0,
    totalCost: 0,
  };
  
  export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: state.totalItems + 1,
          totalCost: state.totalCost + action.payload.price,
        };
      case 'INCREMENT_QUANTITY':
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
          ),
          totalItems: state.totalItems + 1,
          totalCost: state.totalCost + state.items.find(item => item.id === action.payload).price,
        };
      case 'DECREMENT_QUANTITY':
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
          ),
          totalItems: state.totalItems - 1,
          totalCost: state.totalCost - state.items.find(item => item.id === action.payload).price,
        };
      case 'REMOVE_FROM_CART':
        const itemToRemove = state.items.find(item => item.id === action.payload);
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - itemToRemove.quantity,
          totalCost: state.totalCost - (itemToRemove.price * itemToRemove.quantity),
        };
      default:
        return state;
    }
  };
  