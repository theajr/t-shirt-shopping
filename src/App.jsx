import React, { useReducer } from 'react';
import { hot } from 'react-hot-loader/root';
import LandingPage from './views/LandingPage';
import AppLayout from './components/Layout/Layout';
import { Provider } from './utils/context';
import products from './utils/products';

const App = () => {
  const initialState = {
    showCartView: false,
    products,
    cart: {},
    filter: [],
    orderBy: 'price:asc',
  };

  const [data, dispatch] = useReducer((state, action) => {
    const { id, operation, size, orderBy } = action;
    const { cart, filter } = state;

    switch (operation) {
      case 'UPDATED_ORDER_BY': {
        return { ...state, orderBy };
      }
      case 'TOGGLE_SIZE_IN_FILTER': {
        const isIn = state.filter.includes(size);

        return isIn
          ? { ...state, filter: [...filter.filter(s => s !== size)] }
          : { ...state, filter: [...filter, size] };
      }
      case 'TOGGLE_CART_VIEW': {
        return { ...state, showCartView: !state.showCartView };
      }
      case 'ADD': {
        return { ...state, cart: { ...cart, [id]: 1 } };
      }
      case 'INC': {
        return { ...state, cart: { ...cart, [id]: cart[id] + 1 } };
      }
      case 'DEC': {
        const updatedCart = { ...cart };
        if (cart[id] > 1) {
          updatedCart[id] -= 1;
        } else {
          delete updatedCart[id];
        }
        return { ...state, cart: { ...updatedCart } };
      }
      case 'REMOVE': {
        const updatedCart = { ...cart };
        delete updatedCart[id];
        return { ...state, cart: updatedCart };
      }
      default:
        return state;
    }
  }, initialState);

  return (
    <Provider value={{ state: data, dispatch }}>
      <AppLayout>
        <LandingPage />
      </AppLayout>
    </Provider>
  );
};

export default hot(App);
