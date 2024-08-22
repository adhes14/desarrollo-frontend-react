import { combineReducers } from 'redux';

// Import custom reducers
import defaultReducer from './default/defaultReducer';
import productsReducer from './products/productsReducers';
import formReducer from './form/formReducers';

const rootReducer = combineReducers({
  default: defaultReducer,
  products: productsReducer,
  form: formReducer,
});

export default rootReducer;