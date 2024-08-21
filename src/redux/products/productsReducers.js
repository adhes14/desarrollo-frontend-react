import { SET_PRODUCTS } from './productsTypes';

const initialState = {
  PRODUCTS: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        PRODUCTS: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;