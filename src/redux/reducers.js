import { combineReducers } from 'redux';

// Import custom reducers
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
  default: defaultReducer,
});

export default rootReducer;