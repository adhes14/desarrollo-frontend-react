import { combineReducers } from 'redux';

// Import custom reducers
import defaultReducer from './default/defaultReducer';
import productsReducer from './products/productsReducers';

const rootReducer = combineReducers({
  default: defaultReducer,
  products: productsReducer,
});

export default rootReducer;